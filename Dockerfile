FROM nginxinc/nginx-unprivileged

ENV TZ=America/Bogota \
    NGINX_USER=nginx \
    NGINX_UID=101 \
    NGINX_GID=101

USER root
RUN apt-get update && apt-get install -y curl tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY styles.css .
COPY script.js .
COPY images/ ./images/

RUN chmod -R 755 /usr/share/nginx/html
USER nginx

EXPOSE 8080
STOPSIGNAL SIGQUIT
HEALTHCHECK --interval=20m --timeout=4s --start-period=30s --retries=5 \
  CMD curl -f http://localhost:80 || exit 1

