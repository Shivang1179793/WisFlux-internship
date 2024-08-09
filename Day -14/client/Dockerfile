FROM node:alpine

WORKDIR /visitor_client

COPY package.json .

RUN npm config set unsafe-perm true

RUN mkdir -p /visitor_client/node_modules

RUN chown node:node /visitor_client/node_modules

RUN npm install --force

COPY . .

# RUN chown -R node /visitor_client/node_modules

USER node

CMD ["npm", "run", "start"]