import type {NextApiHandler} from 'next'
import moment from 'moment'

import {fullPrice, halfPrice} from '../../assets/db/price'
import {getWidePay} from '../../services/widePay'
import type {Client} from '../../models/client'
import {throwApiError} from '../../utils/throwApiError'

const handlePayment: NextApiHandler = async (req, res) => {
	const {
		clients,
		paymentMethod
	}: {clients: Client[] | null; paymentMethod: string} = req.body

	if (!paymentMethod || !clients || clients.length === 0)
		return throwApiError(res, 'Informações faltando na requisição!', 400)

	const fullQuantity = clients.filter(
		({ticketType}) => ticketType === 'full'
	).length
	const halfQuantity = clients.filter(
		({ticketType}) => ticketType === 'half'
	).length

	const items: Array<{descricao: string; valor: string; quantidade: number}> =
		[]

	if (fullQuantity > 0)
		items.push({
			descricao: '2ª Semana Astronômica - Ingresso - Inteira',
			valor: fullPrice.toFixed(2),
			quantidade: clients.filter(({ticketType}) => ticketType === 'full').length
		})

	if (halfQuantity > 0)
		items.push({
			descricao: '2ª Semana Astronômica - Ingresso - Meia',
			valor: halfPrice.toFixed(2),
			quantidade: clients.filter(({ticketType}) => ticketType === 'half').length
		})

	let method = 'Cartão'
	if (paymentMethod === 'boleto') method = 'Boleto'
	else if (method === 'credit') method = 'Cartão'

	const dueDate = moment().add(5, 'days').format('YYYY-MM-DD')

	const widePayOptions = {
		forma: method,
		cliente: clients[0].name,
		pessoa: 'Física',
		cpf: clients[0].cpf,
		itens: items,
		vencimento: dueDate
	}

	const widePay = getWidePay()
	const addResponse = await widePay.api(
		'/recebimentos/cobrancas/adicionar',
		widePayOptions
	)

	if (addResponse.sucesso) {
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({id: addResponse.id, link: addResponse.link}))
	} else {
		if (addResponse.erro === 'Erro na validação dos campos.')
			return throwApiError(res, addResponse.validacao, 400)
		else {
			console.log('<< addResponse >>', addResponse)

			return throwApiError(res, addResponse.erro)
		}
	}
}

export default handlePayment
