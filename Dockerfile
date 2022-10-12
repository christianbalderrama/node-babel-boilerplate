# Base from node-alpine grab this image
FROM node:lts-alpine
# Set this as the working directory
WORKDIR /app
# Copy /src /lib and package.json to the current directory
COPY ["src", "lib", "package.json", "./"]
# Perform an `npm install`
RUN npm install
# Copy all the files
COPY . .
# Expose PORT 3000
EXPOSE 3000
# Execute `npm start` command
CMD ["npm", "start"]