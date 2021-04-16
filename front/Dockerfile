FROM node:15.14.0-alpine3.10

ENV HOME="app" \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo

ENV HOST 0.0.0.0

WORKDIR ${HOME}

RUN apk update && \
    apk upgrade && \
    npm install -g n && \
    yarn install && \
    rm -rf /var/cache/apk/*

# RUN yarn run build
# EXPOSE 3000
# CMD ["yarn"、"dev"]