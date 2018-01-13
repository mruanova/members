FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Port
EXPOSE 8080

# npm run start CMD [ "npm", "start" ]
CMD [ "node", "server.js" ]

# docker build -t mruanova/node-web-app .
# docker images
# docker run -p 49160:8080 -d mruanova/node-web-app

# Get container ID (all users)
# docker ps -a

# Print app output
# docker logs <container id>

# Example
# Running on http://localhost:8080

# test
# curl -i localhost:8080/ap/members