import styled from 'styled-components'

const Container = styled.div`
	position: relative;

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
`

export default Container