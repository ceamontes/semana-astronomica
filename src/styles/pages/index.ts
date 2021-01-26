import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	height: 200vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: space-between; */
	gap: 2rem;

	padding: 5rem;

	.background
	{
		position: absolute;
		top: 0;
		left: 0;
		
		width: calc(100vw - 1rem);
		height: 200vh;

		z-index: -1;

		::before
		{
			z-index: 1;

			content: '';
			height: 50rem;
			width: 100%;
			display: block;

			position: absolute;
			background-image: ${p => `linear-gradient(to bottom, ${p.theme.black}, rgba(0,0,0,0))`};
		}
	}

	header
	{
		display: flex;
		flex-direction: column;
		gap: 2rem;

		width: 100%;

		.logo
		{
			width: 30vw;
		}

		nav
		{
			display: flex;
			align-items: center;
			justify-content: center;

			a
			{
				font-family: Ubuntu;
				font-weight: 700;
				font-size: 2rem;

				color: ${p => p.theme.textWhite};
				text-decoration: none;

				padding-left: 1rem;
				padding-right: 1rem;

				border-right: ${p => p.theme.textWhite}80 2px solid;

				:last-child
				{
					border: none;
				}

				::after
				{
					content: '';
					width: 0px;
					height: 2px;
					display: block;
					background: ${p => p.theme.textWhite};
					transition: 0.25s;
				}

				:hover::after
				{
					width: 100%;
				}
			}
		}
	}

	.textBlock
	{
		width: 60%;
		background-color: ${p => p.theme.textWhite}80;
		border-radius: 1rem;
		padding: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		h1
		{
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 2rem;

			color: ${p => p.theme.textGray};
		}

		p
		{
			font-family: Roboto;
			font-size: 1.5rem;
			color: ${p => p.theme.textGray};
			
			text-indent: 1rem;
		}
	}
`

export default Container