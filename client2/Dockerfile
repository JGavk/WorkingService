FROM node:20

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g create-vite

# Bundle app source
COPY . .

EXPOSE 5173

# Esta linea ejecuta en la terminal los comandos para iniciar todo
CMD [ "npm", "run", "dev" ]