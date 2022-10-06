FROM node:18.10-slim

WORKDIR /usr/src/app

# NODE_ENV=production
# ska in i compose

# install dependencies
COPY package.json package-lock.json ./
RUN ["npm", "ci"]

# install app
COPY index.js ./

# run as non-root
USER node

# todo: move port to env
EXPOSE 3000
CMD ["node", "index.js"]
