# SYSTEM SHELL
The Shell Application

## 🧶 INSTALL AND RUN SERVICE - YARN

```sh

# register packages - yarn (ask owner for token)
npm set "//npm.pkg.github.com/:_authToken=${ASKED_GITHUB_TOKEN}" # you will need to tell npm to authenticate yourself to install registries

# run current service
yarn # install dependencies
yarn start # start application

```

## 🐳 INSTALL AND RUN SERVICE - DOCKER

```sh

# deploy service to docker
docker-compose --env-file=token.env up --build -d --force-recreate 

# build service without docker compose
docker build -t {SERVICE_NAME} . --progress plain --no-cache --env-file=token.env

```

- ACCESS
  - GO TO http://localhost:7070
