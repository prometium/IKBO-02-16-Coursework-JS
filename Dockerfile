FROM node:12.13.1-alpine as build
WORKDIR /app
COPY package*.json ./
COPY webpack.*.js ./
COPY babel.*.js ./
COPY public ./public
COPY src ./src
RUN npm install && npm run build

FROM nginx:1.17.6-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
