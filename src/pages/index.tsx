import Head from 'next/head'
import Image from 'next/image'

import Container from '../styles/pages/index'
import background from '../assets/background.jpg'
import logo from '../assets/logo.svg'

const Home: React.FC = () =>
{
	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>

			<div className='background'>
				<Image src={background} layout='fill' />
			</div>

			<header>
				<div className='logo'>
					<Image src={logo} width={1000} height={350} layout='responsive' />
				</div>
				<nav>
					<a href='#'>SEMANA ASTRONÔMICA</a>
					<a href='#'>INSCRIÇÕES</a>
					<a href='#'>SOBRE</a>
					<a href='#'>CONTATO</a>
				</nav>
			</header>

		</Container>
	)
}

export default Home