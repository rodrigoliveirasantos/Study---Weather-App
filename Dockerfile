FROM node:18

# Envia tudo para a pasta /app no container.
WORKDIR /app

COPY package.json /app/package.json

RUN npm install
RUN npm install @angular/cli@15 -g

COPY . /app

# Serve a aplicação fora do localhost do container na porta 4200
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

