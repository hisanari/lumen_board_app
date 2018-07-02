FROM php:7-fpm

RUN apt-get update && \
  apt-get install -y git zip unzip zlib1g-dev openssl && \
  docker-php-ext-install pdo_mysql mysqli mbstring zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer global require "laravel/lumen-installer"
ENV PATH $PATH:~/.composer/vendor/bin

WORKDIR /usr/myapp