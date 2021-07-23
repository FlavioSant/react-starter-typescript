## BUILD STAGE

FROM node:alpine as build

ARG APP_NAME
ARG APP_IMAGE
ARG API_URL

ENV API_URL ${API_URL}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN NODE_ENV=development yarn install

COPY . . 

RUN yarn build


## NGINX SERVER

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]