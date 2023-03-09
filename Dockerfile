FROM node:18.15.0-alpine3.17 as builder

WORKDIR /usr/src/app

COPY . /usr/src/app

COPY .env.production.local .env

RUN npm install

RUN npm run build

FROM nginx:alpine as production-build

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY ./etc/docker/nginx/default.conf /etc/nginx/conf.d

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]