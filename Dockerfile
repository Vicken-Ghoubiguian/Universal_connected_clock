#Put the node image as image's base
FROM node:latest

#
LABEL maintainer="ericghoubiguian@live.fr"

#Copy all the files and directories in the newly created directory Universal_connected_clock
COPY . /Universal_connected_clock

#Definition of the timezone Docker image for the "Europe/Paris" one
RUN ln -sf /usr/share/zoneinfo/Europe/Paris /etc/localtime

#Install all the needed npm packages to run the Universal_connected_clock
RUN npm install

#Expose the docker container listening port
EXPOSE 80

#
CMD npm start
