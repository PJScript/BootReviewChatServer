FROM node:12-alpine
WORKDIR /usr

COPY . .

RUN npm install
RUN npm run build

WORKDIR /usr

CMD ["npm", "run", "start"]
# EXPOSE 8888

