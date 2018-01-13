# watch demo in YouTube
https://youtu.be/tf7f3gqtTBw

# install
npm install

# start the server in the first terminal (node.js)
nodemon ./src/server.js

# start the app in the second terminal (react.js)
npm run start

# browser
http://localhost:3000/

# Docker

## build docker
docker build -t mruanova/node-web-app .

## see images
docker images

## run docker
docker run -p 49160:80 -d mruanova/node-web-app

## Get container ID (all users)
docker ps -a

### Print app output
docker logs <container id>

## Browser
http://localhost:80

## test
curl -i localhost:80/ap/members

### to tag 
docker tag local-image:tagname reponame:tagname
docker push reponame:tagname

### to stop use
ctrl +p +q