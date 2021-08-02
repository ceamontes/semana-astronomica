import styled from 'styled-components'

interface ContainerProps {
	step: number
}

const Container = styled.div<ContainerProps>`
	background-color: ${p => p.theme.textGray}80;
	min-height: 100vh;

	header {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		background-color: ${p => p.theme.background};
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

		.group {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;

			button.cancel {
				background: none;
				border: ${p => p.theme.primary} 2px solid;
				color: ${p => p.theme.primary};
				border-radius: 0.5rem;

				margin-right: auto;
				padding: 0.5rem 1rem;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;

				transition: background-color 0.2s, color 0.2s, border-radius 0.2s;

				:hover {
					background-color: ${p => p.theme.primary};
					color: ${p => p.theme.background};

					border-radius: 0;
				}

				span {
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 1.5rem;
				}

				svg {
					font-size: 1.75rem;
				}
			}

			h1 {
				font-family: Roboto;
				font-weight: 700;
				color: ${p => p.theme.primary};

				text-align: center;
			}

			.img {
				width: 15rem;
			}
		}

		.navigate {
			display: flex;
			align-items: center;
			justify-content: space-around;

			button {
				background: none;
				border: none;
				padding: 0.5rem 1rem;

				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;

				color: ${p => p.theme.primary};

				:hover {
					span::after {
						width: 100%;
					}
				}

				span {
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 1.5rem;

					::after {
						content: '';
						width: 0px;
						height: 2px;
						display: block;
						background: ${p => p.theme.primary};
						transition: width 0.2s;
					}
				}
			}

			ul {
				display: flex;
				align-items: center;
				gap: 0.25rem;
			}
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		padding: 1rem;
		padding-top: 2rem;
		padding-bottom: calc(5rem + 1rem + 1rem);

		h1 {
			font-weight: 700;
			color: ${p => p.theme.primary};
		}

		form {
			width: 100%;
			padding-right: 1rem;

			display: flex;
			flex-direction: column;
			gap: 1rem;

			.field {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				padding-left: 1.5rem;

				label {
					font-family: Ubuntu;
					font-weight: 700;

					color: ${p => p.theme.primary};
					border-left: ${p => p.theme.primary} 5px solid;
					padding-left: 1rem;
					margin-left: -1.5rem;
				}

				input[type='text'] {
					border: none;
					border-bottom: ${p => p.theme.gray} 2px solid;
					background-color: ${p => p.theme.textGray}80;
					height: 3rem;

					color: ${p => p.theme.primary};

					padding: 1rem;

					transition: border-bottom-color 0.2s;

					:focus,
					:hover {
						border-bottom-color: ${p => p.theme.primary};
					}
				}

				.option {
					display: flex;
					align-items: center;
					gap: 1rem;

					cursor: pointer;

					label {
						border: 0;
						margin: 0;
						padding: 0;
					}
				}
			}
		}

		.confirmArea {
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 1rem;

			padding-left: 1.5rem;

			* {
				color: ${p => p.theme.primary};
				font-family: Roboto;
			}

			h2 {
				border-left: ${p => p.theme.primary} 5px solid;
				padding-left: 1rem;
				margin-left: -1.5rem;
			}

			ul {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;

				.confirmData {
					width: 100%;

					display: flex;
					align-items: center;
					gap: 0.25rem;

					label {
						font-weight: 700;
					}
				}
			}
		}

		.disclaimer {
			color: ${p => p.theme.primary};
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: space-around;

			p {
				width: 75%;
			}
		}

		.clients {
			width: 100%;

			display: flex;
			flex-direction: column;
			gap: 2rem;

			> div {
				width: 100%;

				display: flex;
				flex-direction: column;
				gap: 1rem;

				span.clientTitle {
					margin: 0 auto;

					color: ${p => p.theme.primary};
					font-weight: 700;
					font-size: 1.25rem;
				}
			}
		}
	}

	.price {
		position: fixed;
		right: 1rem;
		bottom: 1rem;

		height: 3rem;
		width: 10rem;
		background-color: ${p => p.theme.primary};

		border-radius: 0.5rem;
		box-shadow: 0px 0px 10px #000;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 1rem;

		h3 {
			font-family: Ubuntu;
			color: ${p => p.theme.background};
		}

		span {
			color: ${p => p.theme.background};
		}
	}

	@media (min-width: 1100px) {
		header .group {
			flex-direction: row;

			.cancel {
				margin: 0;
			}
		}

		main {
			width: 50vw;
			margin: 0 auto;
		}
	}
`

export default Container
