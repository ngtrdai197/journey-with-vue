# Phase staging Vue app

FROM node:10-alpine as phase-staging

LABEL maintainer="nguyendai.coder@gmail.com"

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

# ==================== *** ====================  #

# Phase production

FROM nginx:1.17-alpine as phase-production

COPY --from=phase-staging /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
