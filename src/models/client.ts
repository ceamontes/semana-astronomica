export type Client = {
	name: string
	cpf: string
	email: string
	phone: string

	cep: string
	street: string
	number: string
	complement: string
	neighborhood: string

	ticketType: 'full' | 'half'
	ticketId: string
}

export function getDefaultClient(ticketType: 'full' | 'half') {
	const defaultClient: Client = {
		name: '',
		cpf: '',
		email: '',
		phone: '',
		cep: '',
		street: '',
		number: '',
		complement: '',
		neighborhood: '',
		ticketType,
		ticketId: ''
	}

	return defaultClient
}
