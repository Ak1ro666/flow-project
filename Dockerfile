# Stage 1: Build
FROM node:lts

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4173

CMD ["npm", "run", "preview"]
