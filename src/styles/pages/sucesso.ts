import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;

	min-height: 100vh;
	padding: 1rem;

	header
	{
		display: flex;
		flex-direction: column;
		gap: 2rem;

		width: 100%;

		.img
		{
			width: 100%;
		}

		.message
		{
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			color: ${p => p.theme.primary};

			h1
			{
				width: 75%;

				font-family: Ubuntu;
			}
		}
	}

	main
	{
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2rem;

		p
		{
			font-family: Roboto;
			font-size: 1.75rem;
			color: ${p => p.theme.primary};

			width: 100%;

			a
			{
				color: ${p => p.theme.primary};
				text-decoration: none;
				font-weight: 700;

				:hover
				{
					text-decoration:  underline;
				}
			}
		}

		.payment
		{
			background-color: ${p => p.theme.primary};
			padding: 1rem;
			border-radius: 100rem;

			display: flex;
			align-items: center;
			gap: 1rem;

			color: ${p => p.theme.background};
			text-decoration: none;

			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				transform: scale(1.1);
			}

			span
			{
				font-family: Ubuntu;
				font-size: 2.5rem;
				font-weight: 700;
			}
		}
	}

	@media(min-width: 1100px)
	{
		header
		{
			width: 50vw;
		}

		main
		{
			flex-direction: row;

			p
			{
				width: 50vw;
			}
		}
	}
`

export default Container