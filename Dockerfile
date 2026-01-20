# Start from Node 18 Alpine base image
FROM node:18-alpine

# Define the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json and install production dependencies
COPY package*.json ./
RUN npm install --production

# Copy all app files
COPY . .

# Build the frontend
RUN npm run build

# Expose the port matching fly.toml
EXPOSE 5000

# Start the production server
CMD ["npm", "run", "start-prod"]
