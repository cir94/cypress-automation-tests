# To run this Docker file, run `docker compose up --build`. If you would like to run this image again after building, run `docker compose up`


FROM cypress/base:latest

WORKDIR /usr/src/app

RUN apt-get update

RUN apt-get install -y chromium

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=cache,target=/root/.npm \
    npm install

COPY . .

CMD npm run cy:dockerheadless