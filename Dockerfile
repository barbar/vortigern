FROM alpine:edge

MAINTAINER Barbar Startup Factory hey@barbar.com.tr

RUN apk add --no-cache nodejs

RUN mkdir -p /app
ADD . /app

WORKDIR /app

RUN npm run setup && rm -rf node_modules

EXPOSE 80

CMD ["npm run start"]