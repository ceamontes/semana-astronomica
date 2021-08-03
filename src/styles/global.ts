import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
	@media(max-width: 1100px)
	{
		html
		{
			font-size: 93.75%;
		}
	}

	@media(max-width: 900px)
	{
		html
		{
			font-size: 87.5%;
		}
	}

	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}

	html {
		scroll-behavior: smooth;
		scroll-padding-top: 50px;
	}

	body
	{
		background-color: ${p => p.theme.background};
		overflow-x: hidden;

		::-webkit-scrollbar
		{
			width: 1rem;
		}
		::-webkit-scrollbar-track
		{
			background-color: ${p => p.theme.primary}26;
		}
		
		::-webkit-scrollbar-thumb
		{
			background-color: ${p => p.theme.primary};
			:hover
			{
				background-color: ${p => p.theme.primary}bf;
			}
		}
	}

	body, input, textarea, button
	{
		font-family: Roboto;
	}
	
	button
	{
		cursor: pointer;
	}
	
	a
	{
		color: inherit;
	}

	.swal2-popup
	{
		background-color: ${p => p.theme.background} !important;

		#swal2-title
		{
			font-family: Ubuntu;
			font-size: 25px;
			color: ${p => p.theme.primary};
		}

		#swal2-content
		{
			font-family: Roboto;
			font-size: 20px !important;
			color: ${p => p.theme.primary};
		}

		.swal2-actions
		{
			font-size: 15px !important;
			font-family: Ubuntu !important;
		}
	}
`
