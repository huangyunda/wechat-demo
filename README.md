# Usage

## server deployment
```
ssh root@49.235.149.160
cd wechat-service
docker-compose build
docker-compose up
```

## docker command
查看所有image
`docker images`

查看所有container
`docker container ls -a` or `docker ps -a`

container日志
`docker container logs [container ID]`

进入container
`docker container exec -it [container ID] /bin/bash`

mysql登录
`mysql -u root -p`

