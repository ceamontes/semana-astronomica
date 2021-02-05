function formatPrice(price: number)
{
	const formated = 'R$' + price.toFixed(2).replace('.', ',')
	return formated
}

export default formatPrice