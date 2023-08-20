FROM node:18.4.0-alpine3.15

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm ci

COPY ./src ./src
COPY ./public ./public

COPY ./postcss.config.js ./
COPY ./next.config.js ./
COPY ./tailwind.config.ts ./
COPY ./tsconfig.json ./

CMD [ "npm", "run", "dev" ]
