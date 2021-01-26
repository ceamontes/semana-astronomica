import Head from 'next/head'
import Image from 'next/image'

import Container from '../styles/pages/index'
import background from '../assets/background.jpg'

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

			<h1>hello world</h1>
		</Container>
	)
}

export default Home