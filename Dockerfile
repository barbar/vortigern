FROM mhart/alpine-node:latest

MAINTAINER Barbar Startup Factory hey@barbar.com.tr

WORKDIR /app
ADD . .

RUN npm install

EXPOSE 8889

CMD ["npm", "run", "start:prod"]
