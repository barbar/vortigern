webpack = webpack

NODE_ENV ?= development
PORT ?= 8889

clean:
	rm -rf build/

build: clean
	webpack --display-error-details --config webpack.prod.js
	webpack --display-error-details --config webpack.server.js

start: build
	BROWSER= \
	NODE_ENV=$(NODE_ENV) \
	PORT=$(PORT) \
	node build/server.js

dev: clean
	webpack --config webpack.dev.js
	webpack --config webpack.server.js
	node ./build/server.js