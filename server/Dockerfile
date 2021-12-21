FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN npm install --global yarn --force
RUN yarn install --production --force --silent
COPY . .
EXPOSE 4000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start:prod"]
