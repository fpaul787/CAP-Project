FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000
CMD [ "npm", "run", "dev" ]

#docker run -p 3000:3000 -p 5000:5000 [app-name]