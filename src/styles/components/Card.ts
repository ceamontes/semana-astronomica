import styled from 'styled-components'

interface ContainerProps
{
	isSelected: boolean
}

const Container = styled.div<ContainerProps>`
	height: 50rem;
	width: 33rem;
	background-color: ${p => p.theme.background};

	padding: 1rem;
	border-radius: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	color: ${p => p.theme.primary};
	border: ${p => p.isSelected ? p.theme.secondary : p.theme.primary + 40} 2px solid;
	transition: 0.25s;

	.img
	{
		width: 100%;

		img
		{
			border-radius: 1rem;
		}
	}

	h2
	{
		font-family: Ubuntu;
		font-size: 2rem;

		width: 100%;
	}

	.group
	{
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;

		span
		{
			font-family: Roboto;
			font-size: 1.5rem;
		}
	}

	.lecturers
	{
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		padding-left: 5rem;
		width: 100%;
		
		li
		{
			font-family: Roboto;
			font-size: 1.5rem;
		}
	}

	p
	{
		font-family: Roboto;
		font-size: 1.25rem;

		text-align: justify;
	}

	.select
	{
		background: none;
		border: ${p => p.theme.primary} 1px solid;
		color: ${p => p.theme.primary};

		font-family: Ubuntu;
		font-weight: 700;
		font-size: 1.5rem;

		padding: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		border-radius: 100rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		cursor: pointer;
		transition: 0.25s;

		:hover, :active
		{
			background-color: ${p => p.theme.primary};
			color: ${p => p.theme.background};
		}
	}
`

export default Container