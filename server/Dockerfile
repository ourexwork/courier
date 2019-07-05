# Node server
FROM node:8.11.2 as node-server
WORKDIR /server
COPY package*.json /server
RUN npm install 
COPY  . /server
EXPOSE 5000
ENV coPrivateKey=;lksdlkslakdlkdslk
ENV GEOLOCATION_API_KEY=AIzaSyB8lm4CEk6YVOXTVvkeDDluMEXb06rOkhw
CMD [ "npm" , "start" ]