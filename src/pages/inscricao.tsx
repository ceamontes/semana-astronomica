import Head from 'next/head'
import {useEffect, useState} from 'react'
import {FiArrowLeft, FiMinus, FiPlus} from 'react-icons/fi'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {useRouter} from 'next/router'

import Container from '../styles/pages/inscricao'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import events from '../../db/events.json'

const Pedido: React.FC = () =>
{
	const router = useRouter()

	const [step, setStep] = useState(1)

	function goBack()
	{
		if (step > 1)
			setStep(step - 1)
	}

	function goNext()
	{
		if (step < 4)
			setStep(step + 1)
	}

	const Step: React.FC = () =>
	{
		switch (step)
		{
			case 1:
				return (
					<main>
						<h1>Selecione os eventos que você deseja participar</h1>
						<div className='grid'>
							{events.map((event, index) => (
								<div key={index} >
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
								</div>
							))}
						</div>
					</main>
				)
			case 2:
				return (
					<main>dados pessoais</main>
				)
			case 3:
				return (
					<main>dados financeiros</main>
				)
			case 4:
				return (
					<main>confirmação</main>
				)
		}
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

			<Step />
		</Container>
	)
}

export default Pedido