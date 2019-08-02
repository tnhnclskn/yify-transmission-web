FROM node:slim

ENV HOST=0.0.0.0

COPY . .

RUN cp .env.example .env
RUN npm install

ENTRYPOINT [ "npm", "start" ]
