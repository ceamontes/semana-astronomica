import Head from 'next/head'
import {useEffect, useState} from 'react'
import {FiArrowLeft, FiCheck, FiMinus, FiPlus, FiX} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Image from 'next/image'

import Container, {Card} from '../styles/pages/inscricao'
import logo from '../assets/logo.svg'
import events from '../../db/events.json'
import warningAlert from '../utils/alerts/warning'

const Pedido: React.FC = () =>
{
	const router = useRouter()

	const [step, setStep] = useState(1)
	const [selectedEvents, setSelectedEvents] = useState<number[]>([])

	const [name, setName] = useState('')
	const [cpf, setCpf] = useState('')
	const [cep, setCep] = useState('')
	const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
	const [complement, setComplement] = useState('')
	const [neighborhood, setNeighborhood] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	function goBack()
	{
		if (step > 1)
			setStep(step - 1)
	}

	function goNext()
	{
		if (step === 1 && selectedEvents.length === 0)
			warningAlert('Você precisa selecionar pelo menos 1 evento!')
		else if (step === 2 && !isPersonalDataValid())
			warningAlert('Você deve preencher todos os campos marcados com "*"!')
		else if (step < 4)
			setStep(step + 1)
	}

	function handleSelectEvent(event: number)
	{
		let tmpSelectedEvents = [...selectedEvents]
		const index = tmpSelectedEvents.findIndex(tmpEvent => tmpEvent === event)

		if (index >= 0)
			tmpSelectedEvents.splice(index, 1)
		else
			tmpSelectedEvents.push(event)

		setSelectedEvents(tmpSelectedEvents)
	}

	function isPersonalDataValid()
	{
		if (name === '')
			return false
		if (cpf === '')
			return false
		if (cep === '')
			return false
		if (street === '')
			return false
		if (number === '')
			return false
		if (neighborhood === '')
			return false
		if (email === '')
			return false
		if (phone === '')
			return false

		return true
	}

	return (
		<Container step={step} >
			<Head>
				<title>Pedido</title>
			</Head>
			
			<header>
				<div className='group'>
					<button className='cancel' onClick={() => router.back()} >
						<FiArrowLeft size={30} />
						<span>Cancelar</span>
					</button>
					<h1>Você está se inscrevendo na 2ª Semana Astronômica</h1>
					<div className='img'>
						<Image src={logo} width={1000} height={350} layout='responsive' />
					</div>
				</div>
				<div className='navigate'>
					<button onClick={goBack} className='back' >
						<FaAngleLeft size={25} />
						<span>Voltar</span>
					</button>

					<ul>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 1 ? '#5daccb' : '#343434'} />
						</svg>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 2 ? '#5daccb' : '#343434'} />
						</svg>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 3 ? '#5daccb' : '#343434'} />
						</svg>
						<svg width={10} height={10} >
							<circle cx={5} cy={5} r={5} fill={step >= 4 ? '#5daccb' : '#343434'} />
						</svg>
					</ul>

					<button onClick={goNext} className='next' >
						<span>{step !== 4 ? 'Continuar' : 'Finalizar'}</span>
						<FaAngleRight size={25} />
					</button>
				</div>
			</header>

			{step === 1 && (
				<main>
					<h1>Selecione os eventos em que você deseja participar</h1>
					<div className='grid'>
						{events.map((event, index) => (
							<Card key={index} isSelected={selectedEvents.includes(index)} >
								<div className='img'>
									<Image src={event.image} width={500} height={350} />
								</div>
								<h2>{event.title}</h2>
								<div className='group'>
									<span>{event.date}</span>
									<span>{event.time}</span>
								</div>
								<ul className='lecturers'>
									{event.lecturers.map((lecturer, index) => (
										<li key={index} >
											{lecturer}
										</li>
									))}
								</ul>
								<p>{event.description}</p>

								<button className='select' onClick={() => handleSelectEvent(index)}>
									{
										!selectedEvents.includes(index)
										? (
											<>
												<FiCheck size={15} />
												<span>Selecionar</span>
											</>
										)
										: (
											<>
												<FiX size={15} />
												<span>Deselecionar</span>
											</>
										)
									}
								</button>
							</Card>
						))}
					</div>
				</main>
			)}

			{step === 2 && (
				<main>
					<h1>Informe seus dados pessoais abaixo</h1>
					<form onSubmit={e => e.preventDefault()} >
						{/* name */}
						<div className='field'>
							<label htmlFor='name'>Nome *</label>
							<input
								name='name'
								id='name'
								type='text'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						{/* cpf */}
						<div className='field'>
							<label htmlFor='cpf'>CPF *</label>
							<input
								name='cpf'
								id='cpf'
								type='text'
								value={cpf}
								onChange={e => setCpf(e.target.value)}
							/>
						</div>
						{/* cep */}
						<div className='field'>
							<label htmlFor='cep'>Cep *</label>
							<input
								name='cep'
								id='cep'
								type='text'
								value={cep}
								onChange={e => setCep(e.target.value)}
							/>
						</div>
						{/* street */}
						<div className='field'>
							<label htmlFor='street'>Logradouro *</label>
							<input
								name='street'
								id='street'
								type='text'
								value={street}
								onChange={e => setStreet(e.target.value)}
							/>
						</div>
						{/* number */}
						<div className='field'>
							<label htmlFor='number'>Número *</label>
							<input
								name='number'
								id='number'
								type='text'
								value={number}
								onChange={e => setNumber(e.target.value)}
							/>
						</div>
						{/* complement */}
						<div className='field'>
							<label htmlFor='complement'>Complemento</label>
							<input
								name='complement'
								id='complement'
								type='text'
								value={complement}
								onChange={e => setComplement(e.target.value)}
							/>
						</div>
						{/* neighborhood */}
						<div className='field'>
							<label htmlFor='neighborhood'>Bairro *</label>
							<input
								name='neighborhood'
								id='neighborhood'
								type='text'
								value={neighborhood}
								onChange={e => setNeighborhood(e.target.value)}
							/>
						</div>
						{/* email */}
						<div className='field'>
							<label htmlFor='email'>E-mail *</label>
							<input
								name='email'
								id='email'
								type='text'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						{/* phone */}
						<div className='field'>
							<label htmlFor='phone'>Celular *</label>
							<input
								name='phone'
								id='phone'
								type='text'
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</div>
					</form>
				</main>
			)}

			{step === 3 && (
				<main>dados financeiros</main>
			)}

			{step === 4 && (
				<main>confirmação</main>
			)}
		</Container>
	)
}

export default Pedido