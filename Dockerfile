FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon

EXPOSE 5000
CMD [ "npm", "run", "server" ]