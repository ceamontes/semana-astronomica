import styled from 'styled-components'

const Container = styled.div`
	min-height: 100vh;
	padding: 2rem;
	padding-bottom: 5rem;

	> header,
	main {
		margin-bottom: 3rem;
	}

	header {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		gap: 2rem;

		width: 100%;

		.img {
			width: 100%;
			max-width: 500px;

			margin: 0 auto;
		}

		.message {
			display: flex;
			align-items: center;
			gap: 1rem;

			color: ${p => p.theme.primary};

			h1 {
				font-family: Ubuntu;
				font-size: 1.25rem;

				width: 80%;
			}

			svg {
				font-size: 2.5rem;
			}
		}
	}

	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;

		p {
			font-size: 1.5rem;
			color: ${p => p.theme.primary};

			width: 100%;

			a {
				color: ${p => p.theme.primary};
				text-decoration: none;
				font-weight: 700;

				:hover {
					text-decoration: underline;
				}
			}
		}

		a.payment {
			background-color: ${p => p.theme.primary};
			padding: 1rem;
			border-radius: 0.5rem;

			display: flex;
			align-items: center;
			gap: 1rem;

			color: ${p => p.theme.background};
			text-decoration: none;

			cursor: pointer;
			transition: border-radius 0.2s, filter 0.2s;

			:hover {
				border-radius: 0;
				filter: brightness(0.75);
			}

			span {
				font-family: Ubuntu;
				font-size: 1.75rem;
				font-weight: 700;
			}

			svg {
				font-size: 1.75rem;
			}
		}
	}

	.tickets {
		width: 100%;
		padding: 0 1rem;

		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 0.5rem;

		> * {
			color: ${p => p.theme.primary};
		}

		ul {
			margin: 1rem auto;

			li {
				list-style: none;

				font-weight: 700;
				font-size: 1.5rem;
			}
		}

		button {
			background: none;
			border: ${p => p.theme.primary} 2px solid;
			border-radius: 0.5rem;

			padding: 0.75rem 1rem;
			color: ${p => p.theme.primary};

			display: flex;
			align-items: center;
			gap: 1rem;

			cursor: pointer;
			transition: background-color 0.2s, color 0.2s, border-radius 0.2s;

			:hover {
				background-color: ${p => p.theme.primary};
				border-radius: 0;

				color: ${p => p.theme.background};
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
	}

	@media (min-width: 1100px) {
		header {
			flex-direction: row;
		}

		main {
			flex-direction: row;

			p {
				width: 50vw;
			}
		}

		.id {
			width: 50vw;
		}
	}
`

export default Container
