import styled from 'styled-components'

interface ContainerProps
{
	step: number
}

const Container = styled.div<ContainerProps>`
	background-color: ${p => p.theme.textGray}80;
	min-height: 100vh;

	header
	{
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		background-color: ${p => p.theme.background};
		box-shadow: 0px 5px 5px rgba(0,0,0,0.5);

		.group
		{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;

			.cancel
			{
				background: none;
				border: ${p => p.theme.primary} 2px solid;
				border-radius: 100rem;
				padding: 0.5rem;
				padding-left: 1rem;
				padding-right: 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;
				color: ${p => p.theme.primary};
				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					background-color: ${p => p.theme.primary};
					color: ${p => p.theme.background};
					transform: scale(1.1);
				}

				span
				{
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 1.75rem;
				}
			}

			h1
			{
				font-family: Roboto;
				font-weight: 700;
				font-size: 2.5rem;
				color: ${p => p.theme.primary};
			}

			.img
			{
				width: 20rem;
			}
		}

		.navigate
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			button
			{
				background: none;
				border: none;
				padding: 0.5rem;
				padding-left: 1rem;
				padding-right: 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;
				color: ${p => p.theme.primary};
				cursor: pointer;
				transition: 0.25s;

				:hover
				{
					transform: scale(1.1);

					span::after
					{
						width: 100%;
					}
				}

				span
				{
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 1.75rem;

					::after
					{
						content: '';
						width: 0px;
						height: 2px;
						display: block;
						background: ${p => p.theme.primary};
						transition: 0.25s;
					}
				}
			}

			ul
			{
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}
	}

	@media(min-width: 1100px)
	{
		header .group
		{
			flex-direction: row;
		}
	}
`

export default Container