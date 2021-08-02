import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;

	padding: 2rem;

	.background {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		z-index: -1;

		::before {
			z-index: 1;

			content: '';
			height: 50rem;
			width: 100%;
			display: block;

			position: absolute;
			background-image: ${p =>
				`linear-gradient(to bottom, ${p.theme.black}, rgba(0,0,0,0))`};
		}
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		width: 100%;

		.logo {
			width: 75vw;
			max-width: 30rem;
		}

		nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			a {
				font-family: Ubuntu;
				font-weight: 700;
				font-size: 2rem;

				width: 25rem;

				display: flex;
				align-items: center;
				justify-content: center;

				color: ${p => p.theme.textWhite};
				text-decoration: none;

				border-bottom: ${p => p.theme.textWhite}80 2px solid;
				padding-top: 1rem;
				padding-bottom: 1rem;

				:last-child {
					border: none;
				}
			}
		}
	}

	.textBlock {
		width: 95%;
		background-color: ${p => p.theme.textWhite}bf;
		border-radius: 1rem;
		padding: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		h1 {
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 2rem;

			color: ${p => p.theme.textGray};
		}

		p {
			font-family: Roboto;
			font-size: 1.5rem;
			color: ${p => p.theme.textGray};

			text-indent: 1rem;
		}
	}

	.contact {
		background-color: ${p => p.theme.textGray}bf;

		h1 {
			color: ${p => p.theme.textWhite};
		}

		ul {
			margin-left: 5rem;

			* {
				color: ${p => p.theme.textWhite};
				font-family: Roboto;
				font-size: 1.5rem;
			}

			li a {
				text-decoration: none;
				font-weight: 700;

				:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.subscribe {
		background-color: ${p => p.theme.background}80;
		border: ${p => p.theme.primary} 2px solid;
		border-radius: 100rem;

		padding: 1rem;
		color: ${p => p.theme.primary};

		display: flex;
		align-items: center;
		gap: 1rem;

		cursor: pointer;
		transition: 0.25s;

		:hover {
			background-color: ${p => p.theme.primary};
			color: ${p => p.theme.background};

			transform: scale(1.1);
		}

		span {
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 2.5rem;
		}
	}

	.events {
		width: 100%;

		display: grid;
		grid-auto-rows: 50rem;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;
	}

	@media (min-width: 1100px) {
		padding: 5rem;

		header {
			.logo {
				width: 30vw;
			}

			nav {
				flex-direction: row;

				a {
					width: fit-content;
					flex-direction: column;

					padding: 0;
					padding-left: 1rem;
					padding-right: 1rem;

					border: 0;
					border-right: ${p => p.theme.textWhite}80 2px solid;

					::after {
						content: '';
						width: 0px;
						height: 2px;
						display: block;
						background: ${p => p.theme.textWhite};
						transition: 0.25s;
					}

					:hover::after {
						width: 100%;
					}
				}
			}
		}

		.textBlock,
		.events {
			width: 60%;
		}

		.contact ul * {
			font-size: 2rem;
		}
	}
`

export default Container
