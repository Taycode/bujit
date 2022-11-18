FROM node:16.13.0-alpine
# Env
ENV TIME_ZONE=Africa/Lagos
ENV ENV_NAME dev
ENV EGG_SERVER_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev
# Set the timezone in docker
#RUN apk --update add tzdata \\
#   && cp /usr/share/zoneinfo/Africa/Lagos /etc/localtime \\
#   && echo "Africa/Lagos" > /etc/timezone \\
#   && apk del tzdata
# Create Directory for the Container
WORKDIR /usr/src/server
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/server
# TypeScript
RUN yarn run tsc
# Start

CMD [ "yarn", "run", "dev:run" ]
EXPOSE 7001
