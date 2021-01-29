import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}

	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}

	body
	{
		background-color: ${p => p.theme.background};

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