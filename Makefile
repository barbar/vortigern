webpack = webpack

NODE_ENV ?= development
PORT ?= 8889

ifeq (NODE_ENV, development)
	WEBPACK_FILE = dev
else
	WEBPACK_FILE = prod
endif

clean:
	rm -rf build/

build: clean
	webpack --config config/webpack/$(WEBPACK_FILE).js
	webpack --config config/webpack/server.js

start: build
	node build/server.js