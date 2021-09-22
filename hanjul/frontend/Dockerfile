# Build Setting
FROM node:14.17.4-alpine as build-stage
MAINTAINER Taehyun Kim <sskl600@naver.com>

# build by yarn
WORKDIR /app
ADD . .
RUN yarn install
COPY . .
RUN yarn build
