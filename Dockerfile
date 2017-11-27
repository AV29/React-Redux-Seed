# In your Dockerfile.
FROM node:8.9.1
ENV NPM_CONFIG_LOGLEVEL warn
COPY . .
RUN npm install
EXPOSE 3000
CMD ['npm', 'run', 'build']
