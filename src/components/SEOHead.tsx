import Head from 'next/head'

interface SEOHeadProps
{
	title?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({title}) =>
{
	const meta =
	{
		title: title ? title : '2ª Semana Astronômica | CEAMONTES',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, odio nec dignissim consequat, nisi ante mollis ipsum, sed aliquet sem augue quis risus. Donec posuere placerat purus, at tempor justo cursus at. Suspendisse at ex eget elit lacinia tempus.',
		image: 'https://semana.ceamontes.org.br/thumbnail.png',
		url: 'https://semana.ceamontes.org.br'
	}

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name='title' content={meta.title} />
			<meta name='description' content={meta.description} />

			<meta property='og:type' content='article' />
			<meta property='og:url' content={meta.url} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:description' content={meta.description} />
			<meta property='og:image' content={meta.image} />
			<meta property='og:site_name' content='Cinephix' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={meta.url} />
			<meta property='twitter:title' content={meta.title} />
			<meta property='twitter:description' content={meta.description} />
			<meta property='twitter:image' content={meta.image} />
		</Head>
	)
}

export default SEOHead