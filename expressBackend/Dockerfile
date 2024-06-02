# Version de Node.js base
FROM node:20

WORKDIR /usr/src/app


COPY package*.json ./

# Instalamos las dependencias de Node.js
RUN npm install


COPY . .


EXPOSE 3000

# Esta linea ejecuta en la terminal los comandos para iniciar todo
CMD [ "npm", "start" ]