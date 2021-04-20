FROM node:14-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/dist/ /srv
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

