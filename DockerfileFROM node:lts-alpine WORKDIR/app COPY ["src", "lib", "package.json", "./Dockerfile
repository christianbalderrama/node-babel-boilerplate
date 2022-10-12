FROM node:lts-alpine
WORKDIR /app
COPY ["src", "lib", "package.json", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
