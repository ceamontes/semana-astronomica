import blackHoleImg from '../images/events/black-hole.png'
import rocketImg from '../images/events/rocket.png'
import skyImg from '../images/events/sky.png'
import telescopeImg from '../images/events/telescope.png'

export type Event = {
	title: string
	image: any
	date: string
	time: string
	description: string
	lecturers: string[]
}

export const events: Event[] = [
	{
		title: 'Localização no Céu Noturno',
		image: skyImg,
		date: '##/##/2021 (quinta-feira)',
		time: '18:00 - 20:00',
		description:
			'Palestra sobre reconhecimento de constelações, planetas, objetos do céu profundo, e mais. Softwares de visualização — como Stellarium e Heavens Above — serão utilizados para facilitar a explicação, mas também haverá observação de astros a olho nu e apontamento com laser no céu noturno.',
		lecturers: ['Gabriel Oliveira', 'Iago Mendes']
	},
	{
		title: 'Os telescópios na Astronomia',
		image: telescopeImg,
		date: '##/##/2021 (quinta-feira)',
		time: '20:00 - 22:00',
		description:
			'Palestra para quem deseja aprender sobre telescópios de uma maneira geral. Haverá duas abordagens: uma visão mais teórica sobre tais instrumentos, cobrindo os fenômenos ópticos e diferentes montagens; e um relato sobre a fabricação artesanal de telescópios, apresentando fotos e detalhes do processo.',
		lecturers: ['Lucas Fonseca', 'Marcos Carvalho']
	},
	{
		title: 'Astrofísica Estelar e Cosmologia',
		image: blackHoleImg,
		date: '##/##/2021 (sexta-feira)',
		time: '18:00 - 20:00',
		description:
			'Palestra sobre o magnífico espaço sideral, com foco em estrelas e objetos derivados como buracos negros. Serão abordados diversos tópicos como evolução estelar, paradoxos da Cosmologia, expansão do universo, entre outras curiosidades. Tudo explicado de uma forma didática para facilitar a compreensão do público.',
		lecturers: ['Gabriel Oliveira', 'Iago Mendes']
	},
	{
		title: 'A História do Programa Espacial Brasileiro',
		image: rocketImg,
		date: '##/##/2021 (sexta-feira)',
		time: '20:00 - 22:00',
		description:
			'Palestra sobre a participação brasileira na exploração do espaço. As atividades do Programa Espacial Brasileiro (PEB) serão apresentadas desde sua fundação até os dias atuais, abordando não só conquistas ao longo desse período, mas também tragédias como o acidente de Alcântara.',
		lecturers: ['Júlio Guedes']
	}
]
