FROM node:18-alpine

WORKDIR /app
COPY ./package*.json ./
RUN npm ci --quiet
ENV PATH="./node_modules/.bin:${PATH}"

COPY . .
RUN npm run-script build

CMD node src/index.js
