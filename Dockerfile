# In your Dockerfile.
FROM node:latest
MAINTAINER Anton Vlasik
ENV PORT=3020
COPY . .
RUN npm install
EXPOSE $PORT
CMD npm run build
