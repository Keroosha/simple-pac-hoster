FROM node

WORKDIR /opt/app
COPY index.js ./index.js

EXPOSE 911
CMD node index.js
