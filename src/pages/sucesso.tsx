import Head from 'next/head'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import Container from '../styles/pages/sucesso'

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
		</Container>
	)
}

export default Success