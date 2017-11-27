# In your Dockerfile.
FROM node:8.9.1
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
