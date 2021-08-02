import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineForm} from 'react-icons/ai'
import {useRouter} from 'next/dist/client/router'

import events from '../../db/events.json'

import Container from '../styles/pages/index'
import background from '../assets/background.jpg'
import logo from '../assets/logo.svg'
import SEOHead from '../components/SEOHead'
import Card from '../components/Card'

const Home: React.FC = () => {
	const {push} = useRouter()

	return (
		<Container>
			<SEOHead />

			<div className="background">
				<Image src={background} layout="fill" />
			</div>

			<header>
				<div className="logo">
					<Image src={logo} width={1000} height={350} layout="responsive" />
				</div>
				<nav>
					<Link href="#semana-astronomica">SEMANA ASTRONÔMICA</Link>
					<Link href="#sobre">SOBRE</Link>
					<Link href="#contato">CONTATO</Link>
				</nav>
			</header>

			<button className="subscribe" onClick={() => push('/inscricao')}>
				<AiOutlineForm size={30} />
				<span>Inscreva-se</span>
			</button>

			<div id="semana-astronomica" className="textBlock">
				<h1>2ª SEMANA ASTRONÔMICA</h1>
				<p>
					Este é o site de inscrição para a 2ª Semana Astronômica realizada pelo
					CEAMONTES. Esse evento tem como objetivo oferecer conhecimentos na
					área da Astronomia para a região do Norte de Minas Gerais por um baixo
					custo, o qual é convertido para mais projetos da nossa associação.
				</p>
				<p>Confira os eventos disponíveis abaixo:</p>
			</div>

			<div className="events">
				{events.map((event, index) => (
					<Card event={event} showSelect={false} key={index} />
				))}
			</div>

			<div id="sobre" className="textBlock">
				<h1>SOBRE O CEAMONTES</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
					hendrerit, odio nec dignissim consequat, nisi ante mollis ipsum, sed
					aliquet sem augue quis risus. Donec posuere placerat purus, at tempor
					justo cursus at. Suspendisse at ex eget elit lacinia tempus. Nullam
					tincidunt risus purus, sit amet ultricies elit ultrices non. Nulla
					facilisis elit at sollicitudin blandit.
				</p>
				<p>
					Maecenas nec auctor mi. Maecenas turpis nibh, molestie vitae enim non,
					consequat pretium lacus. Phasellus auctor cursus pulvinar.
					Pellentesque libero nunc, aliquet id congue vitae, congue eu nisi.
					Morbi condimentum lorem eget dignissim molestie. Mauris vel vehicula
					ligula, eget vehicula ligula. Maecenas in justo id urna venenatis
					bibendum a in mi. Sed ac dolor feugiat nisi maximus faucibus eu non
					dolor. Vestibulum quis sollicitudin diam. Vestibulum nisl felis,
					placerat viverra purus vitae, elementum egestas leo.
				</p>
				<p>
					Nam tempor sodales consectetur. Curabitur ullamcorper libero eu
					tristique laoreet. In hac habitasse platea dictumst. Fusce ornare odio
					dignissim quam molestie sollicitudin. Etiam dignissim nisi placerat
					sollicitudin pellentesque. Duis et justo facilisis, porta massa nec,
					tempor leo. Nullam imperdiet, velit eget tincidunt sagittis, justo ex
					gravida nibh, nec viverra nisl libero facilisis felis.
				</p>
			</div>

			<button className="subscribe" onClick={() => push('/inscricao')}>
				<AiOutlineForm size={30} />
				<span>Inscreva-se</span>
			</button>

			<div id="contato" className="textBlock contact">
				<h1>CONTATO</h1>
				<ul>
					<li>
						E-mail:{' '}
						<a href="mailto:ceamontes.org.br@gmail.com">
							ceamontes.org.br@gmail.com
						</a>
					</li>
					<li>Telefone: (38) 99999-9999</li>
				</ul>
			</div>
		</Container>
	)
}

export default Home
