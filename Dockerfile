FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY app/src ./src

EXPOSE 3000

CMD ["npm", "start"]
