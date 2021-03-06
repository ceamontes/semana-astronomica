import {NextApiHandler} from "next"
import getConfig from 'next/config'
import moment from 'moment'
import WidePay from 'wide-pay-node'

import events from '../../../db/events.json'
import prices from '../../../db/prices.json'

const {serverRuntimeConfig: env} = getConfig()

const config =
{
	widePayId: env.widePayId,
	widePayToken: env.widePayToken
}

const handlePayment: NextApiHandler = async (req, res) =>
{
	const {paymentMethod, name, cpf, selectedEvents}:
	{
		paymentMethod: string,
		name: string,
		cpf: string,
		selectedEvents: number[]
	} = req.body

	if (!paymentMethod || !name || !cpf || !selectedEvents)
	{
		res.statusCode = 400
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({message: 'You need to provide payment method, name, cpf, and selected events.'}))
	}

	const quantity = selectedEvents.length
	const pricePerItem = (prices[quantity]/quantity).toFixed(2)

	const items = selectedEvents.map(index =>
	{
		const event = events[index]

		return (
		{
			descricao: `${event.title} (palestra)`,
			valor: pricePerItem
		})
	})

	let method: string = 'Cartão'
	if (paymentMethod === 'boleto')
		method = 'Boleto'
	else if (method === 'credit')
		method = 'Cartão'

	const dueDate = moment().add(5, 'days').format('YYYY-MM-DD')

	const options =
	{
		forma: method,
		cliente: name,
		pessoa: 'Física',
		cpf: cpf,
		itens: items,
		vencimento: dueDate
	}

	const widePay = new WidePay(config.widePayId, config.widePayToken)
	const addResponse = await widePay.api('/recebimentos/cobrancas/adicionar', options)

	if (addResponse.sucesso)
	{
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({id: addResponse.id, link: addResponse.link}))
	}
	else
	{
		if (addResponse.erro === 'Erro na validação dos campos.')
		{
			res.statusCode = 400
			res.setHeader('Content-Type', 'application/json')
			return res.end(JSON.stringify({validationError: true, message: addResponse.validacao}))
		}
		else
		{
			console.log('[addResponse]', addResponse)

			res.statusCode = 500
			res.setHeader('Content-Type', 'application/json')
			return res.end(JSON.stringify({message: addResponse.erro}))
		}
	}
}

export default handlePayment