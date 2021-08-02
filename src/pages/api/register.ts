import {NextApiHandler} from 'next'
import {connectToDatabase} from '../../services/mongodb'

const handleRegister: NextApiHandler = async (req, res) => {
	const {
		name,
		cpf,
		cep,
		street,
		number,
		complement,
		neighborhood,
		email,
		phone,
		paymentMethod,
		selectedEvents
	}: {
		name: string
		cpf: string
		cep: string
		street: string
		number: string
		complement: string
		neighborhood: string
		email: string
		phone: string
		paymentMethod: string
		selectedEvents: number[]
	} = req.body

	if (
		!name ||
		!cpf ||
		!cep ||
		!street ||
		!number ||
		!neighborhood ||
		!email ||
		!phone ||
		!paymentMethod ||
		!selectedEvents
	) {
		res.statusCode = 400
		res.setHeader('Content-Type', 'application/json')
		return res.end(
			JSON.stringify({
				message: 'You did not provide all the necessary information.'
			})
		)
	}

	const data = {
		name,
		cpf,
		cep,
		street,
		number,
		complement,
		neighborhood,
		email,
		phone,
		paymentMethod,
		selectedEvents
	}

	const {db} = await connectToDatabase()
	const Clients = db.collection('clients')
	const result = await Clients.insertOne(data)

	if (result.insertedId) {
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({id: result.insertedId}))
	} else {
		console.log('[result]', result)

		res.statusCode = 500
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({message: 'Falha interna!'}))
	}
}

export default handleRegister
