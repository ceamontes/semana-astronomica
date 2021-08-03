import {NextApiHandler} from 'next'
import {Client} from '../../models/client'
import {connectToDatabase} from '../../services/mongodb'
import {throwApiError} from '../../utils/throwApiError'

const register: NextApiHandler = async (req, res) => {
	const {clients}: {clients: Client[] | null} = req.body

	if (!clients)
		return throwApiError(res, 'Informações faltando na requisição!', 400)

	const {db} = await connectToDatabase()
	const Clients = db.collection('clients')
	const result = await Clients.insertMany(clients)

	if (result.insertedCount === clients.length) {
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		return res.end()
	} else {
		console.log('<< result >>', result)

		return throwApiError(res)
	}
}

export default register
