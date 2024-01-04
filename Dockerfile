FROM node:20 as build
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM httpd:2.4 as image
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
