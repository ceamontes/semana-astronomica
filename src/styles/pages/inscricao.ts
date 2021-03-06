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

				margin-right: 50%;

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

	main
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		padding: 1rem;
		padding-top: 2rem;
		padding-bottom: calc(5rem + 1rem + 1rem);

		h1
		{
			font-family: Roboto;
			font-weight: 700;
			font-size: 2.5rem;

			color: ${p => p.theme.primary};
		}

		.grid
		{
			width: 100%;

			display: grid;
			grid-auto-rows: 50rem;
			grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
			grid-gap: 2rem;
			align-items: center;
			justify-items: center;
		}

		form
		{
			width: 100%;
			padding-right: 2rem;
		
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.field
			{
				display: flex;
				flex-direction: column;
				gap: 1rem;

				label
				{
					font-family: Ubuntu;
					font-size: 2rem;
					font-weight: 700;

					color: ${p => p.theme.primary};
					border-left: ${p => p.theme.primary} 5px solid;
					padding-left: 1rem;
				}

				input[type=text]
				{
					border: none;
					border-bottom: ${p => p.theme.gray} 2px solid;
					background-color: ${p => p.theme.textGray}80;
					height: 3rem;

					font-family: Roboto;
					font-size: 2rem;
					color: ${p => p.theme.primary};

					padding: 1rem;
					margin-left: 2rem;

					transition: 0.25s;

					:focus, :hover
					{
						border-bottom-color: ${p => p.theme.primary};
					}
				}

				.option
				{
					margin-left: 2rem;

					display: flex;
					align-items: center;
					gap: 1rem;

					label
					{
						border: 0;
						padding: 0;
					}
				}
			}
		}

		.confirmArea
		{
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 1rem;

			*
			{
				color: ${p => p.theme.primary};
				font-family: Roboto;
			}

			h2
			{
				border-left: ${p => p.theme.primary} 5px solid;
				padding-left: 1rem;

				font-size: 2rem;
			}

			.grid
			{
				grid-auto-rows: 25rem;
				grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));

				.eventCard
				{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 0.5rem;

					width: 25rem;
					height: 25rem;

					background-color: ${p => p.theme.background};
					border-radius: 1rem;
					padding: 1rem;

					.img img
					{
						border-radius: 1rem;
					}

					h3
					{
						font-size: 1.5rem;
					}

					.group
					{
						display: flex;
						justify-content: space-between;

						span
						{
							font-size: 1.25rem;
						}
					}
				}
			}

			ul
			{
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;

				.confirmData
				{
					margin-left: 2rem;
					width: calc(100% - 2rem);

					display: flex;
					align-items: center;
					gap: 1rem;

					*
					{
						font-size: 1.5rem;
					}

					label
					{
						font-weight: 700;
					}
				}
			}

			.paymentMethod
			{
				margin-left: 2rem;
				font-size: 1.75rem;
			}
		}

		.disclaimer
		{
			color: ${p => p.theme.primary};
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: space-around;

			p
			{
				width: 75%;

				font-family: Roboto;
				font-size: 1.5rem;
			}
		}
	}

	.price
	{
		position: fixed;
		right: 1rem;
		bottom: 1rem;

		height: 5rem;
		width: 17rem;
		background-color: ${p => p.theme.primary};

		border-radius: 1rem;
		box-shadow: 0px 0px 10px #000;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding-left: 1rem;
		padding-right: 1rem;

		h3
		{
			font-family: Ubuntu;
			font-size: 2rem;
			color: ${p => p.theme.background};
		}

		span
		{
			font-family: Roboto;
			font-size: 2rem;
			color: ${p => p.theme.background};
		}
	}

	@media(min-width: 1100px)
	{
		header .group
		{
			flex-direction: row;

			.cancel
			{
				margin: 0;
			}
		}

		main
		{
			form, .disclaimer, .confirmArea
			{
				width: 50vw;
			}
		}
	}
`

export default Container