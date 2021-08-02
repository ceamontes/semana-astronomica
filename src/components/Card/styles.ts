import styled from 'styled-components'

interface ContainerProps {
	isSelected: boolean
}

const Container = styled.div<ContainerProps>`
	height: 40rem;
	width: 20rem;
	background-color: ${p => p.theme.background};

	padding: 1rem;
	border-radius: 0.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	color: ${p => p.theme.primary};
	border: ${p => (p.isSelected ? p.theme.secondary : p.theme.primary + 40)} 2px
		solid;
	transition: 0.25s;

	.img {
		width: 100%;

		img {
			border-radius: 0.5rem;
		}
	}

	h2 {
		font-family: Ubuntu;

		width: 100%;
	}

	.group {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
	}

	.lecturers {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		padding-left: 2rem;
		width: 100%;
	}

	p {
		text-align: justify;
	}

	button.select {
		background: none;
		border: ${p => p.theme.primary} 2px solid;
		color: ${p => p.theme.primary};

		font-family: Ubuntu;
		font-weight: 700;

		padding: 0.5rem 1rem;
		border-radius: 0.5rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		transition: background-color 0.2s, color 0.2s;

		:hover,
		:active {
			background-color: ${p => p.theme.primary};
			color: ${p => p.theme.background};
		}
	}
`

export default Container
