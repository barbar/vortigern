/**
 * General Configurations Like PORT, HOST names and etc...
 */

const config: any = {
	env: process.env.NODE_ENV || 'development',
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 8889,

	app: {
	  head: {
			title: 'barbar-ts-starter',
	    titleTemplate: 'barbar-ts-starter: %s',
	    meta: [
	      { charset: 'utf-8' },
				{ 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	     	{ name: 'description', content: 'All the modern best practices in one example.' },
	    ]
	  }
	},

}

export default config;