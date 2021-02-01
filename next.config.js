const withImages = require('next-images')

module.exports = withImages(
{
	esModule: true,
	serverRuntimeConfig:
	{
		widePayId: process.env.WIDE_PAY_ID,
		widePayToken: process.env.WIDE_PAY_TOKEN
	}
})