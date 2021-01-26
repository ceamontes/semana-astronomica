import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
					<Link href='#semana-astronomica'>SEMANA ASTRONÔMICA</Link>
					<Link href='#'>INSCRIÇÕES</Link>
					<Link href='#sobre'>SOBRE</Link>
					<Link href='#'>CONTATO</Link>
				</nav>
			</header>

			<div id='semana-astronomica' className='textBlock' >
				<h1>2ª SEMANA ASTRONÔMICA</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, odio nec dignissim consequat, nisi ante mollis ipsum, sed aliquet sem augue quis risus. Donec posuere placerat purus, at tempor justo cursus at. Suspendisse at ex eget elit lacinia tempus. Nullam tincidunt risus purus, sit amet ultricies elit ultrices non. Nulla facilisis elit at sollicitudin blandit.
				</p>
				<p>
					Maecenas nec auctor mi. Maecenas turpis nibh, molestie vitae enim non, consequat pretium lacus. Phasellus auctor cursus pulvinar. Pellentesque libero nunc, aliquet id congue vitae, congue eu nisi. Morbi condimentum lorem eget dignissim molestie. Mauris vel vehicula ligula, eget vehicula ligula. Maecenas in justo id urna venenatis bibendum a in mi. Sed ac dolor feugiat nisi maximus faucibus eu non dolor. Vestibulum quis sollicitudin diam. Vestibulum nisl felis, placerat viverra purus vitae, elementum egestas leo.
				</p>
				<p>
					Nam tempor sodales consectetur. Curabitur ullamcorper libero eu tristique laoreet. In hac habitasse platea dictumst. Fusce ornare odio dignissim quam molestie sollicitudin. Etiam dignissim nisi placerat sollicitudin pellentesque. Duis et justo facilisis, porta massa nec, tempor leo. Nullam imperdiet, velit eget tincidunt sagittis, justo ex gravida nibh, nec viverra nisl libero facilisis felis.
				</p>
			</div>

			<div id='sobre' className='textBlock' >
				<h1>Sobre o CEAMONTES</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, odio nec dignissim consequat, nisi ante mollis ipsum, sed aliquet sem augue quis risus. Donec posuere placerat purus, at tempor justo cursus at. Suspendisse at ex eget elit lacinia tempus. Nullam tincidunt risus purus, sit amet ultricies elit ultrices non. Nulla facilisis elit at sollicitudin blandit.
				</p>
				<p>
					Maecenas nec auctor mi. Maecenas turpis nibh, molestie vitae enim non, consequat pretium lacus. Phasellus auctor cursus pulvinar. Pellentesque libero nunc, aliquet id congue vitae, congue eu nisi. Morbi condimentum lorem eget dignissim molestie. Mauris vel vehicula ligula, eget vehicula ligula. Maecenas in justo id urna venenatis bibendum a in mi. Sed ac dolor feugiat nisi maximus faucibus eu non dolor. Vestibulum quis sollicitudin diam. Vestibulum nisl felis, placerat viverra purus vitae, elementum egestas leo.
				</p>
				<p>
					Nam tempor sodales consectetur. Curabitur ullamcorper libero eu tristique laoreet. In hac habitasse platea dictumst. Fusce ornare odio dignissim quam molestie sollicitudin. Etiam dignissim nisi placerat sollicitudin pellentesque. Duis et justo facilisis, porta massa nec, tempor leo. Nullam imperdiet, velit eget tincidunt sagittis, justo ex gravida nibh, nec viverra nisl libero facilisis felis.
				</p>
			</div>

		</Container>
	)
}

export default Home