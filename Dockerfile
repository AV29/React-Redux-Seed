# In your Dockerfile.
FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3020
CMD npm run build
