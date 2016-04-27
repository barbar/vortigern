webpack = webpack

NODE_ENV ?= development
PORT ?= 8889

clean:
	rm -rf build/

dev: clean
	webpack --config config/webpack/dev.js
	webpack --config config/webpack/server.js
	node ./build/server.js

build: clean
	webpack --config config/webpack/prod.js
	webpack --config config/webpack/server.js

start: build
	BROWSER= \
	NODE_ENV=$(NODE_ENV) \
	PORT=$(PORT) \
	node build/server.js