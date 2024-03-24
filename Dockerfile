FROM nginx:latest
LABEL authors="jaiken"

# 将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY *.html /usr/share/nginx/html/
COPY public /usr/share/nginx/html/public/
COPY error /usr/share/nginx/html/error/
COPY default.conf /etc/nginx/conf.d/default.conf
