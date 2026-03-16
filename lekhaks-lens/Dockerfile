# Stage 1: build Angular app
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: serve with Nginx (Alpine)
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/lekhaks-lens /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]