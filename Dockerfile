FROM node:18-alpine

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm i -g @nestjs/cli && npm i
 
COPY app/* .

EXPOSE 3000

# ENTRYPOINT [ "tail", "-f", "/dev/null" ] 