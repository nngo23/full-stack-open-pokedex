# Start from Node 18 Alpine base image
FROM node:18-alpine

# Define the working directory in the container
WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY dist ./dist
COPY app.js .
COPY controllers ./controllers
COPY utils ./utils

EXPOSE 5000

CMD ["node", "app.js"]
