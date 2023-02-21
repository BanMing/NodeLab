FROM node:14

WORKDIR /usr/src/app


# Install app depenencies
COPY pakage*.json ./
RUN npm Install

# Bundle app source
COPY . .

CMD ["npm","run","dev"]
