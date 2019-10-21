FROM node

WORKDIR /opt/app
COPY src/* ./

EXPOSE 911
CMD node index.js
