# watch demo in YouTube
https://youtu.be/tf7f3gqtTBw

# install
npm install

# 1) start with Docker

## make sure the port is 49160 in the file index.js

## build docker
docker build -t mruanova/node-web-app .

## see images
docker images

## run docker
docker run -p 49160:8080 -d mruanova/node-web-app

## Get container ID (docker ps -a)
docker ps

### Print app output
docker logs <container id>

## test
curl -i localhost:49160/api/members

## test browser
http://localhost:49160/api/members

## start the app in the second terminal (react.js)
npm run start

# browser
http://localhost:3000/

### to stop docker use
ctrl +p +q

# 2) start without Docker (optional)

## make sure the port is 8080 in the file index.js

## start the server in the first terminal (node.js)
nodemon ./src/server.js

## start the app in the second terminal (react.js)
npm run start

# browser
http://localhost:3000/