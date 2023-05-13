## 数据库
数据库使用docker的方式启动：
1. `cd document/docker`；
2. `docker compose up -d`。

## nginx
使用nginx转发的方式对接前后台，配置文件nginx.config位于document目录下。启动项目之前先用该配置文件替换本地的配置文件，再启动nginx。

## 前后台均启动成功后
访问 http://localhost:8015/index 查看demo。