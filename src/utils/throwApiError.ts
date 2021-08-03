import {NextApiResponse} from 'next'

export function throwApiError(
	res: NextApiResponse,
	message = 'Falha interna do servidor!',
	code = 500
) {
	res.statusCode = code
	res.setHeader('Content-Type', 'application/json')
	return res.end(JSON.stringify({message}))
}
