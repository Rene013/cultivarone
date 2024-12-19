# Use an official PHP runtime as a parent image
FROM serversideup/php:8.3-fpm-apache

#FROM base as development

#RUN install-pho-extensions intl

WORKDIR /var/www/html/public

# Copy the current directory contents into the container at /var/www/html
COPY ./sql-scripts /var/www/html/public
COPY ./webapp /var/www/html/public

# Copy virtual host configuration
# COPY ./vhost/000-default.conf /etc/apache2/sites-available/000-default.conf

