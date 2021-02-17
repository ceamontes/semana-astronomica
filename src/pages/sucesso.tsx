import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import {FiCheckCircle, FiExternalLink} from 'react-icons/fi'

import Container from '../styles/pages/sucesso'
import logo from '../assets/logo.svg'
import SEOHead from '../components/SEOHead'

const Success: React.FC = () =>
{
	const {query} = useRouter()

	const [link, setLink] = useState('')
	const [id, setId] = useState('')

	useEffect(() =>
	{
		const {link: tmpLink, id: tmpId} = query

		if (typeof tmpLink === 'string')
			setLink(tmpLink)
		if (typeof tmpId === 'string')
			setId(tmpId)
	}, [query])

	return (
		<Container>
			<SEOHead
				title='Sucesso - 2ª Semana Astronômica | CEAMONTES'
			/>

			<header>
				<div className='img'>
					<Image src={logo} width={1000} height={350} layout='responsive' />
				</div>
				<div className='message'>
					<FiCheckCircle size={75} />
					<h1>
						Sua inscrição foi registrada, mas ainda falta fazer o pagamento para concluí-la!
					</h1>
				</div>
			</header>

			<div className='id'>
				<span>A identificação de sua inscrição é <strong>{id}</strong>.</span>
			</div>

			<main>
				<p>
					Para realizar operações financeiras, o CEAMONTES decidiu usar o serviço <a target='_blank' rel='noreferrer' href='https://www.widepay.com'>Wide Pay</a>, um sistema de pagamento online confiável e seguro.
				</p>
				<a target='_blank' rel='noreferrer' href={link} className='payment'>
					<span>Fazer pagamento</span>
					<FiExternalLink size={25} />
				</a>
			</main>
		</Container>
	)
}

export default Success