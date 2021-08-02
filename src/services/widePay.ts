import WidePay from 'wide-pay-node'

export function getWidePay() {
	const widePay = new WidePay(
		process.env.WIDE_PAY_ID,
		process.env.WIDE_PAY_TOKEN
	)
	return widePay
}
