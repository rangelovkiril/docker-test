FROM node:18-alpine

WORKDIR /usr/src/app
# RUN chown -R node:node /usr/src/app

COPY app/package*.json ./

RUN npm i -g @nestjs/cli 
 
COPY app/* .

EXPOSE 3000

# CMD [ "tail", "-f", "/dev/null" ] 