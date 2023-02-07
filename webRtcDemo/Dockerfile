FROM harbor.baoyun.ltd/env/node:16.3.0

MAINTAINER Wang Jun <wangjun@iyunbao.com>

# Set app directory and environment variable
WORKDIR /root/app
ENV NPM_CONFIG_REGISTRY https://npm.baoyun.ltd

# Install app dependencies
COPY package.json pnpm-lock.yaml /root/app/

RUN npm install

# Bundle app source
COPY . /root/app

# Build app source
RUN npm build

EXPOSE 8080
CMD [ "npm", "start" ]
