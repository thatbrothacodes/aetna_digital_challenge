FROM node:14-alpine as NODE
ENV LAST_UPDATED 202005227T204600

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
 
# runs npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

USER root

# Install dependencies
RUN npm install -g -s --no-progress npm && \
    npm install -g -s --no-progress yarn

RUN yarn add global babel-cli

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .babelrc .babelrc
COPY src src

RUN yarn
RUN yarn build

USER node

ENTRYPOINT [ "yarn", "start" ]
