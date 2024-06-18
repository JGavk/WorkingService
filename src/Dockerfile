FROM node:20

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Copy env.bat file
COPY env.bat /usr/src/app/env.bat

# Execute env.bat file to set environment variables (Less Secure)
RUN /usr/src/app/env.bat

# Copy app source
COPY . .

EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]