# Client App
FROM node:8.11.2 as react-client
LABEL authors="Exemblar"
WORKDIR /client
COPY package*.json /client/
RUN npm install 
COPY . /client/
EXPOSE 3000
CMD ["npm", "start"]