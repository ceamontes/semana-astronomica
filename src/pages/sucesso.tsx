import Head from 'next/head'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import {FiCheckCircle, FiExternalLink} from 'react-icons/fi'

import Container from '../styles/pages/sucesso'
import logo from '../assets/logo.svg'

const Success: React.FC = () =>
{
	const router = useRouter()

	const [link, setLink] = useState('')

	useEffect(() =>
	{
		const {link: tmpLink} = router.query
		if (typeof tmpLink === 'string')
			setLink(tmpLink)
	}, [router.query])

	return (
		<Container>
			<Head>
				<title>Sucesso</title>
			</Head>

			<header>
				<div className='img'>
					<Image src={logo} width={1000} height={350} layout='responsive' />
				</div>
				<div className='message'>
					<FiCheckCircle size={100} />
					<h1>
						Sua inscrição foi registrada, mas ainda falta fazer o pagamento para concluí-la!
					</h1>
				</div>
			</header>

			<main>
				<p>
					Para realizar operações financeiras, o CEAMONTES decidiu usar o serviço <a target='_blank' rel='noreferrer' href='https://www.widepay.com'>Wide Pay</a>, um sistema de pagamentos confiável e seguro.
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