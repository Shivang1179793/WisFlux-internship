FROM node:alpine

WORKDIR /visitor_server

COPY package.json .

RUN npm install

COPY . .


CMD ["npm", "run", "dev"]