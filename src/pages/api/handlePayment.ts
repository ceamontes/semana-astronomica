import {NextApiHandler} from "next"
import WidePay from 'wide-pay-node'

const handlePayment: NextApiHandler = async (req, res) =>
{


	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	return res.end(JSON.stringify({}))
}

export default handlePayment