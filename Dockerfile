# Etapa 1: Build de la aplicación
FROM node:latest as node

# Argumentos del nombre del mfe del docker-compose.yml
ARG APP_NAME

# Etapa 2: Copiar el resto de los archivos del MFE para realizar el build
WORKDIR /app

# Copiar todos los archivos
COPY . .

# Ejecutar `npm ci` para instalar las dependencias de manera determinista
RUN npm ci

# Realizar el build de cada mfe
RUN npx nx run ${APP_NAME}:build:production

# Etapa 2: Configuración del servidor Nginx
FROM nginx:alpine

# Argumentos del nombre del mfe del docker-compose.yml
ARG APP_NAME

# Borramos los posibles archivos en la ruta de /usr/share/nginx/html/
RUN rm -rf /usr/share/nginx/html/*

# Copia el resultado del build desde la etapa anterior al directorio de la aplicación de Nginx
COPY --from=node /app/dist/apps/${APP_NAME} /usr/share/nginx/html

# Copia la configuración personalizada del servidor Nginx al contenedor
COPY nginx.conf /etc/nginx/conf.d/default.conf
