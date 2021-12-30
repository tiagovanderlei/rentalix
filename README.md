```bash
yarn add eslint -D
```

yarn eslint --init

yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest

```bash
yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
```

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

docker build -t rentx .

docker run -p 3333:3333 rentx

docker ps

docker exec -it <nome> /bin/bash

docker-compose up
docker-compose up --force-recreate 

execucao desvinculada de um terminal
docker-compose up -d


logs

docker logs rentx
docker logs rentx -f

docker start
docker stop
docker rm

-- obtencao de ip 

docker exec database_ignite cat /etc/hosts



docker volume rm -f /run/desktop/mnt/host/c

docker-compose up -d --build

Migrations:

yarn typeorm migration:create -n CreateCategories


yarn typeorm migration:run
yarn typeorm migration:revert

docker-compose start