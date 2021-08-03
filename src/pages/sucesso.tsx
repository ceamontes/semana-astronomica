import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import {FiCheckCircle, FiExternalLink} from 'react-icons/fi'

import Container from '../styles/pages/sucesso'
import logoImg from '../assets/images/logo.svg'
import SEOHead from '../components/SEOHead'

const Success: React.FC = () => {
	const {query} = useRouter()

	const [link, setLink] = useState('')
	const [ticketIds, setTicketIds] = useState<string[]>([])

	useEffect(() => {
		const {link: tmpLink, id: tmpIds} = query

		if (typeof tmpLink === 'string') setLink(tmpLink)
		if (typeof tmpIds === 'string') setTicketIds([tmpIds])
		else if (tmpIds) setTicketIds(tmpIds)
	}, [query])

	return (
		<Container>
			<SEOHead title="Sucesso - 2ª Semana Astronômica | CEAMONTES" />

			<header>
				<div className="img">
					<Image src={logoImg} width={1000} height={350} layout="responsive" />
				</div>
				<div className="message">
					<FiCheckCircle />
					<h1>
						Sua inscrição foi registrada, mas ainda falta fazer o pagamento para
						concluí-la!
					</h1>
				</div>
			</header>

			<main>
				<p>
					Para realizar operações financeiras, o CEAMONTES decidiu usar o
					serviço{' '}
					<a target="_blank" rel="noreferrer" href="https://www.widepay.com">
						Wide Pay
					</a>
					, um sistema de pagamento online confiável e seguro.
				</p>
				<a target="_blank" rel="noreferrer" href={link} className="payment">
					<span>Fazer pagamento</span>
					<FiExternalLink />
				</a>
			</main>

			<div className="id">
				<span>
					A identificação de sua inscrição é{' '}
					<strong>{ticketIds.toString()}</strong>.
				</span>
			</div>
		</Container>
	)
}

export default Success
