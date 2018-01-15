# Watch demo in YouTube:
https://youtu.be/gwHsfeBIquM

# Installation:
npm install

# 1) Start with Docker:

## Verify the port is 49160 in the file index.js

## Build Docker:
docker build -t mruanova/node-web-app .

## See images:
docker images

## Run Docker :
docker run -p 49160:8080 -d mruanova/node-web-app

## Get container ID:
docker ps

### Print app output:
docker logs <container id>

## Test in the terminal/console:
curl -i localhost:49160/api/members

## Test browser:
http://localhost:49160/api/members

## Start the app in the second terminal (react.js)
npm run start

# Open in the browser:
http://localhost:3000/

# 2) Start without Docker (optional):

## Verify the port is 8080 in the file index.js

## Start the server in the first terminal (node.js)
nodemon ./src/server.js

## Start the app in the second terminal (react.js)
npm run start

# Open in the browser:
http://localhost:3000/
