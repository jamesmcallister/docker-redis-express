# docker-redis-express

Redis runs inside of docker, express is inside its own nodejs container.

docker-compose needs to be installed on host machine

`npm run up:dev` runs docker in non daemon mode.

`npm run up:server` runs docker in daemon mode.

once the server is up, you can run `npm test`
