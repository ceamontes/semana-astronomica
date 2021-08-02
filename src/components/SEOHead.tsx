import Head from 'next/head'

interface SEOHeadProps {
	title?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({title}) => {
	const meta = {
		title: title ? title : '2ª Semana Astronômica | CEAMONTES',
		description:
			'Site de inscrição para a 2ª Semana Astronômica, um evento realizado pelo CEAMONTES que tem como objetivo oferecer conhecimentos na área da Astronomia para a região do Norte de Minas Gerais por um baixo custo, o qual é convertido para mais projetos da nossa associação.',
		image: `${process.env.NEXT_PUBLIC_BASE_URL}/thumbnail.png`,
		url: process.env.NEXT_PUBLIC_BASE_URL
	}

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="title" content={meta.title} />
			<meta name="description" content={meta.description} />

			<meta property="og:type" content="article" />
			<meta property="og:url" content={meta.url} />
			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:image" content={meta.image} />
			<meta property="og:site_name" content="Cinephix" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={meta.url} />
			<meta property="twitter:title" content={meta.title} />
			<meta property="twitter:description" content={meta.description} />
			<meta property="twitter:image" content={meta.image} />
		</Head>
	)
}

export default SEOHead
