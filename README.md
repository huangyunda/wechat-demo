# Usage

## server deployment

``` command
ssh root@xxx
cd wechat-service
docker-compose build
docker-compose up
```

## docker command

- show images

  `docker images`

- show containers

  `docker container ls -a` or `docker ps -a`

- container logs

  `docker container logs [container ID]`

- enter container

  `docker container exec -it [container ID] /bin/bash`

- mysql login

  `mysql -u root -p`
