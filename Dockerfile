FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app

# Change to directory
WORKDIR /usr/src/app

# Install app dependencies
# The wildcard is used to ensure
# bth package.json and package-lock.json are
# copied where available
COPY package*.json ./

RUN npm install 
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "npm", "run", "dev" ]

#docker run -p 3000:3000 -p 5000:5000 [app-name]