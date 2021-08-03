import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineForm} from 'react-icons/ai'
import {useRouter} from 'next/router'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

import {events} from '../assets/db/events'

import Container from '../styles/pages/index'
import backgroundImg from '../assets/images/background.jpg'
import logoImg from '../assets/images/logo.svg'
import SEOHead from '../components/SEOHead'
import Card from '../components/Card'

const Home: React.FC = () => {
	const {push} = useRouter()

	const {ref: button1Ref, inView: isButton1InView} = useInView()
	const {ref: button2Ref, inView: isButton2InView} = useInView()
	const {ref: headerRef, inView: isHeaderInView} = useInView()
	const {ref: weekRef, inView: isWeekInView} = useInView()
	const {ref: eventsRef, inView: isEventsInView} = useInView()
	const {ref: aboutRef, inView: isAboutInView} = useInView()
	const {ref: contactsRef, inView: isContactsInView} = useInView()

	return (
		<Container>
			<SEOHead />

			<div className="background">
				<Image
					src={backgroundImg}
					layout="fill"
					alt="Background image"
					placeholder="blur"
				/>
			</div>

			<motion.header
				ref={headerRef}
				animate={isHeaderInView ? 'shown' : 'hidden'}
				initial="hidden"
				variants={{
					hidden: {opacity: 0, x: -250},
					shown: {opacity: 1, x: 0}
				}}
			>
				<div className="logo">
					<Image
						src={logoImg}
						width={1000}
						height={350}
						layout="responsive"
						alt="CEAMONTES"
					/>
				</div>
				<nav>
					<Link href="#semana-astronomica">SEMANA ASTRONÔMICA</Link>
					<Link href="#sobre">SOBRE</Link>
					<Link href="#contato">CONTATO</Link>
				</nav>
			</motion.header>

			<motion.button
				className="subscribe"
				onClick={() => push('/inscricao')}
				ref={button1Ref}
				initial="hidden"
				animate={isButton1InView ? 'shown' : 'hidden'}
				variants={{
					hidden: {opacity: 0.5, scale: 0},
					shown: {opacity: 1, scale: 1}
				}}
			>
				<AiOutlineForm size={30} />
				<span>Inscreva-se</span>
			</motion.button>

			<motion.div
				id="semana-astronomica"
				className="textBlock"
				ref={weekRef}
				animate={isWeekInView ? 'shown' : 'hidden'}
				initial="hidden"
				variants={{
					hidden: {opacity: 0, x: 250},
					shown: {opacity: 1, x: 0}
				}}
			>
				<h1>2ª SEMANA ASTRONÔMICA</h1>
				<p>
					Este é o site de inscrição para a 2ª Semana Astronômica realizada pelo
					CEAMONTES. Esse evento tem como objetivo oferecer conhecimentos na
					área da Astronomia para a região do Norte de Minas Gerais por um baixo
					custo, o qual é convertido para mais projetos da nossa associação.
				</p>
				<p>Confira os eventos disponíveis abaixo:</p>
			</motion.div>

			<motion.div
				className="events"
				ref={eventsRef}
				animate={isEventsInView ? 'shown' : 'hidden'}
				initial="hidden"
				variants={{
					hidden: {opacity: 0, x: -250},
					shown: {opacity: 1, x: 0}
				}}
			>
				{events.map((event, index) => (
					<Card event={event} showSelect={false} key={index} />
				))}
			</motion.div>

			<motion.div
				id="sobre"
				className="textBlock"
				ref={aboutRef}
				animate={isAboutInView ? 'shown' : 'hidden'}
				initial="hidden"
				variants={{
					hidden: {opacity: 0, x: 250},
					shown: {opacity: 1, x: 0}
				}}
			>
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
			</motion.div>

			<motion.button
				className="subscribe"
				onClick={() => push('/inscricao')}
				ref={button2Ref}
				initial="hidden"
				animate={isButton2InView ? 'shown' : 'hidden'}
				variants={{
					hidden: {opacity: 0.5, scale: 0},
					shown: {opacity: 1, scale: 1}
				}}
			>
				<AiOutlineForm size={30} />
				<span>Inscreva-se</span>
			</motion.button>

			<motion.div
				id="contato"
				className="textBlock contact"
				ref={contactsRef}
				animate={isContactsInView ? 'shown' : 'hidden'}
				initial="hidden"
				variants={{
					hidden: {opacity: 0, x: -250},
					shown: {opacity: 1, x: 0}
				}}
			>
				<h1>CONTATO</h1>
				<ul>
					<li>
						E-mail:{' '}
						<a href="mailto:contato@ceamontes.org">contato@ceamontes.org</a>
					</li>
					<li>Telefone: (38) 99999-9999</li>
				</ul>
			</motion.div>
		</Container>
	)
}

export default Home
