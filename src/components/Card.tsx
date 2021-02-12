import Image from 'next/image'
import {FiCheck, FiX} from 'react-icons/fi'

import Container from '../styles/components/Card'
import events from '../../db/events.json'

interface CardProps
{
	event: typeof events[0]
	isSelected?: boolean

	showSelect?: boolean

	handleSelectEvent?: Function
	index?: number
}

const Card: React.FC<CardProps> = ({isSelected=false, event, index, handleSelectEvent, showSelect = true}) =>
{
	return (
		<Container isSelected={isSelected} >
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

			{showSelect && (
				<button className='select' onClick={() => handleSelectEvent(index)}>
					{
						!isSelected
						? (
							<>
								<FiCheck size={15} />
								<span>Selecionar</span>
							</>
						)
						: (
							<>
								<FiX size={15} />
								<span>Remover</span>
							</>
						)
					}
				</button>
			)}
		</Container>
	)
}

export default Card