import {useEffect, useState, ChangeEvent} from 'react'
import {FiArrowLeft, FiInfo, FiMinus, FiPlus} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Image from 'next/image'

import {events} from '../assets/db/events'
import {fullPrice, halfPrice} from '../assets/db/price'

import Container from '../styles/pages/inscricao'
import logoImg from '../assets/images/logo.svg'
import warningAlert from '../utils/alerts/warning'
import api from '../services/api'
import formatPrice from '../utils/formatPrice'
import errorAlert from '../utils/alerts/error'
import SEOHead from '../components/SEOHead'
import successAlert from '../utils/alerts/success'
import Loading from '../components/Loading'
import {Client, getDefaultClient} from '../models/client'

const Pedido: React.FC = () => {
	const router = useRouter()

	const [step, setStep] = useState(1)

	const [fullTickets, setFullTickets] = useState(0)
	const [halfTickets, setHalfTickets] = useState(0)
	const [clients, setClients] = useState<Client[]>([])

	const [price, setPrice] = useState(0)
	const [paymentMethod, setPaymentMethod] = useState<
		'boleto' | 'credit' | null
	>(null)

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		let tmpPrice = 0
		const tmpClients: Client[] = []

		if (fullTickets > 0) {
			tmpPrice += fullTickets * fullPrice

			for (let i = 0; i < fullTickets; i++)
				tmpClients.push(getDefaultClient('full'))
		}
		if (halfTickets > 0) {
			tmpPrice += halfTickets * halfPrice

			for (let i = 0; i < halfTickets; i++)
				tmpClients.push(getDefaultClient('half'))
		}

		setPrice(tmpPrice)
		setClients(tmpClients)
	}, [fullTickets, halfTickets])

	function handleChangeTickets(type: 'full' | 'half', action: 'more' | 'less') {
		if (type === 'full')
			setFullTickets(prev => {
				if (action === 'more') return prev + 1
				if (action === 'less' && prev > 0) return prev - 1

				return prev
			})

		if (type === 'half')
			setHalfTickets(prev => {
				if (action === 'more') return prev + 1
				if (action === 'less' && prev > 0) return prev - 1

				return prev
			})
	}

	function handleClientChange(index: number, e: ChangeEvent<HTMLInputElement>) {
		const field = e.target.name
		const value = e.target.value

		setClients(prev => {
			if (index >= prev.length) return prev

			const tmpClient = prev[index]
			if (!Object.keys(tmpClient).includes(field)) return prev

			const tmpClients = [...prev]
			tmpClients[index][field] = value

			return tmpClients
		})
	}

	function goBack() {
		if (step > 1) setStep(step - 1)
	}

	function goNext() {
		if (step === 1 && fullTickets === 0 && halfTickets === 0)
			warningAlert('Você precisa selecionar pelo menos 1 ingresso!')
		else if (step === 2 && !isPersonalDataValid())
			warningAlert('Você deve preencher todos os campos marcados com "*"!')
		else if (step === 3 && !paymentMethod)
			warningAlert('Você precisa escolher um método de pagamento!')
		else if (step < 4) setStep(step + 1)
		else handleRegister()
	}

	function isPersonalDataValid() {
		let isValid = true

		clients.forEach(client => {
			if (client.name === '') isValid = false
			if (client.cpf === '') isValid = false
			if (client.cep === '') isValid = false
			if (client.street === '') isValid = false
			if (client.number === '') isValid = false
			if (client.neighborhood === '') isValid = false
			if (client.email === '') isValid = false
			if (client.phone === '') isValid = false
		})

		return isValid
	}

	async function handleRegister() {
		setLoading(true)

		// const data = {
		// 	name,
		// 	cpf,
		// 	cep,
		// 	street,
		// 	number,
		// 	complement,
		// 	neighborhood,
		// 	email,
		// 	phone,
		// 	paymentMethod,
		// 	selectedEvents
		// }

		// await api
		// 	.post('register', data)
		// 	.then(({data}) => {
		// 		handlePayment(data.id)
		// 	})
		// 	.catch(err => {
		// 		setLoading(false)
		// 		console.log('[err]', err.response.data)
		// 		errorAlert(err.response.data.message)
		// 	})
	}

	async function handlePayment(clientId: string) {
		// const data = {
		// 	paymentMethod,
		// 	name,
		// 	cpf,
		// 	selectedEvents
		// }

		// await api
		// 	.post('payment', data)
		// 	.then(res => {
		// 		successAlert('Inscrição registrada com sucesso!')
		// 		router.push(`/sucesso?link=${res.data.link}&id=${clientId}`)
		// 	})
		// 	.catch(err => {
		// 		console.log('[err]', err.response.data)
		// 		errorAlert(err.response.data.message)
		// 	})

		setLoading(false)
	}

	return (
		<Container step={step}>
			<SEOHead title="Inscrição - 2ª Semana Astronômica | CEAMONTES" />

			<Loading isOpen={loading} />

			<header>
				<div className="group">
					<button className="cancel" onClick={() => router.back()}>
						<FiArrowLeft size={30} />
						<span>Cancelar</span>
					</button>
					<h1>Você está se inscrevendo na 2ª Semana Astronômica</h1>
					<div className="img">
						<Image
							src={logoImg}
							width={1000}
							height={350}
							layout="responsive"
						/>
					</div>
				</div>
				<div className="navigate">
					<button onClick={goBack} className="back">
						<FaAngleLeft size={25} />
						<span>Voltar</span>
					</button>

					<ul>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 1 ? '#5daccb' : '#343434'}
							/>
						</svg>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 2 ? '#5daccb' : '#343434'}
							/>
						</svg>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 3 ? '#5daccb' : '#343434'}
							/>
						</svg>
						<svg width={10} height={10}>
							<circle
								cx={5}
								cy={5}
								r={5}
								fill={step >= 4 ? '#5daccb' : '#343434'}
							/>
						</svg>
					</ul>

					<button onClick={goNext} className="next">
						<span>{step !== 4 ? 'Continuar' : 'Finalizar'}</span>
						<FaAngleRight size={25} />
					</button>
				</div>
			</header>

			{step === 1 && (
				<main>
					<h1>Selecione os ingressos</h1>

					<div className="tickets">
						<div>
							<div className="info">
								<span>Inteira</span>
								<span>{fullPrice}</span>
							</div>
							<div className="controller">
								<button
									className="less"
									onClick={() => handleChangeTickets('full', 'less')}
								>
									<FiMinus />
								</button>
								<span>{fullTickets}</span>
								<button
									className="more"
									onClick={() => handleChangeTickets('full', 'more')}
								>
									<FiPlus />
								</button>
							</div>
						</div>

						<div>
							<div className="info">
								<span>Meia</span>
								<span>{halfPrice}</span>
							</div>
							<div className="controller">
								<button
									className="less"
									onClick={() => handleChangeTickets('half', 'less')}
								>
									<FiMinus />
								</button>
								<span>{halfTickets}</span>
								<button
									className="more"
									onClick={() => handleChangeTickets('half', 'more')}
								>
									<FiPlus />
								</button>
							</div>
						</div>
					</div>
				</main>
			)}

			{step === 2 && (
				<main>
					<h1>Informe seus dados pessoais abaixo</h1>

					<div className="clients">
						{clients.map((client, index) => (
							<div key={index}>
								<span className="clientTitle">
									{index + 1}. Ingresso -{' '}
									{client.ticketType === 'half' ? 'Meia' : 'Inteira'}
								</span>
								<form onSubmit={e => e.preventDefault()}>
									{/* name */}
									<div className="field">
										<label htmlFor="name">Nome *</label>
										<input
											type="text"
											name="name"
											value={client.name}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* cpf */}
									<div className="field">
										<label htmlFor="cpf">CPF *</label>
										<input
											type="text"
											name="cpf"
											value={client.cpf}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* email */}
									<div className="field">
										<label htmlFor="email">E-mail *</label>
										<input
											type="text"
											name="email"
											value={client.email}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* phone */}
									<div className="field">
										<label htmlFor="phone">Celular *</label>
										<input
											type="text"
											name="phone"
											value={client.phone}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* cep */}
									<div className="field">
										<label htmlFor="cep">Cep *</label>
										<input
											type="text"
											name="cep"
											value={client.cep}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* street */}
									<div className="field">
										<label htmlFor="street">Logradouro *</label>
										<input
											type="text"
											name="street"
											value={client.street}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* number */}
									<div className="field">
										<label htmlFor="number">Número *</label>
										<input
											type="text"
											name="number"
											value={client.number}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* complement */}
									<div className="field">
										<label htmlFor="complement">Complemento</label>
										<input
											type="text"
											name="complement"
											value={client.complement}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
									{/* neighborhood */}
									<div className="field">
										<label htmlFor="neighborhood">Bairro *</label>
										<input
											type="text"
											name="neighborhood"
											value={client.neighborhood}
											onChange={e => handleClientChange(index, e)}
										/>
									</div>
								</form>
							</div>
						))}
					</div>

					<div className="disclaimer">
						<FiInfo size={30} />
						<p>
							Os dados pessoais informados serão armazenados em um banco de
							dados externo para que o CEAMONTES possa analisar seu público e
							melhorar nossos serviços.
						</p>
					</div>
				</main>
			)}

			{step === 3 && (
				<main>
					<h1>Escolha o método de pagamento</h1>
					<form onSubmit={e => e.preventDefault()}>
						{/* paymentMethod */}
						<div className="field">
							<label htmlFor="paymentMethod">Método de pagamento</label>
							<div className="option">
								<input
									type="radio"
									name="paymentMethod"
									id="boleto"
									onChange={() => setPaymentMethod('boleto')}
								/>
								<label htmlFor="boleto">Boleto</label>
							</div>
							<div className="option">
								<input
									type="radio"
									name="paymentMethod"
									id="credit"
									onChange={() => setPaymentMethod('credit')}
								/>
								<label htmlFor="credit">Cartão de crédito</label>
							</div>
						</div>
					</form>
				</main>
			)}

			{step === 4 && (
				<main>
					<h1>Confirme sua inscrição antes de finalizar</h1>
					<div className="confirmArea">
						<h2>Ingressos ({fullTickets + halfTickets})</h2>
						<span>{fullTickets} inteira(s)</span>
						<span>{halfTickets} meia(s)</span>
					</div>
					<div className="confirmArea">
						<h2>Método de pagamento</h2>
						<span className="paymentMethod">
							{paymentMethod === 'boleto' && 'Boleto'}
							{paymentMethod === 'credit' && 'Cartão de crédito'}
						</span>
					</div>
					{clients.map((client, index) => (
						<div key={index} className="confirmArea">
							<h2>
								Dados pessoais ({index + 1}. Ingresso -{' '}
								{client.ticketType === 'half' ? 'Meia' : 'Inteira'})
							</h2>
							<ul>
								{/* name */}
								<li className="confirmData">
									<label>Nome:</label>
									<span>{client.name}</span>
								</li>
								{/* cpf */}
								<li className="confirmData">
									<label>CPF:</label>
									<span>{client.cpf}</span>
								</li>
								{/* email */}
								<li className="confirmData">
									<label>E-mail:</label>
									<span>{client.email}</span>
								</li>
								{/* phone */}
								<li className="confirmData">
									<label>Celular:</label>
									<span>{client.phone}</span>
								</li>
								{/* cep */}
								<li className="confirmData">
									<label>Cep:</label>
									<span>{client.cep}</span>
								</li>
								{/* street */}
								<li className="confirmData">
									<label>Logradouro:</label>
									<span>{client.street}</span>
								</li>
								{/* number */}
								<li className="confirmData">
									<label>Número:</label>
									<span>{client.number}</span>
								</li>
								{/* complement */}
								<li className="confirmData">
									<label>Complemento:</label>
									<span>{client.complement}</span>
								</li>
								{/* neighborhood */}
								<li className="confirmData">
									<label>Bairro:</label>
									<span>{client.neighborhood}</span>
								</li>
							</ul>
						</div>
					))}
				</main>
			)}

			{[1, 3, 4].includes(step) && (
				<div className="price">
					<h3>Valor:</h3>
					<span>{formatPrice(price)}</span>
				</div>
			)}
		</Container>
	)
}

export default Pedido
