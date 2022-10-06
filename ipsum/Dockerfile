FROM node:18.10-slim@sha256:f32c970581a901560815b9af1aebbc164c86b9be922dda3b9f3b65f653e61776

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
