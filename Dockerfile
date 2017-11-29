# In your Dockerfile.
FROM node:latest
MAINTAINER Anton Vlasik
COPY . .
RUN npm install
EXPOSE $PORT
CMD npm run build
