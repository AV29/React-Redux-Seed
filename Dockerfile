# In your Dockerfile.
FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn
COPY . .
RUN npm install
EXPOSE 3000
CMD ['npm', 'run', 'build']
