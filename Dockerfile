# base image
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/app

COPY . .

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci --only=production

# Copy local code to the container image.

RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]