FROM node:slim

EXPOSE 8000

ENV HOST=0.0.0.0
ENV PORT=8000

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "start" ]
