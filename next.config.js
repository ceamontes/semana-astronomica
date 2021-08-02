module.exports = {
	esModule: true,
	serverRuntimeConfig:
	{
		widePayId: process.env.WIDE_PAY_ID,
		widePayToken: process.env.WIDE_PAY_TOKEN,
		mongodbUri: process.env.MONGODB_URI,
		mongodbDb: process.env.MONGODB_DB
	},
	publicRuntimeConfig:
	{
		baseUrl: process.env.BASE_URL
	}
}
