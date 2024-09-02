# Projeto de estudo - WeatherApp

Aplicação básica para acompanhamento da temperatura local.

## Propostas de aprendizado:
- Conhecimento geral do Angular 15
  - RxJS
  - Roteamento
  - Serviços e components
  - Lidando com imagens
  - Lidando com formulários
- Conhecimento geral do SCSS
- Conceitos de Smart e Dumb components

## Extensões e desafios:
- [x] Dockerização do projeto
- [ ] Tornar o código mais declarativo usando RxJS
- [ ] Integração com o Geolocation API do Javascript

## Pré-requisitos:
1. Node v18.20.4
2. Angular CLI v15.2.11

## Instalação e execução:

### Configuração do ambiente:

1. Copie o arquivo `src/environments/environment.example.ts` e cole na mesma pasta renomeando para `environment.development.ts`, caso esteja rodando em ambiente em desenvolvimento ou `enviroment.production.ts`, caso deseje buildar para produção.
2. Preencha todos os campos no arquivo criado.

### Executando no Docker:

1. Execute o comando abaixo na linha de comando para levantar o container.
```bash
docker compose up -d
```
2. A aplicação será iniciada no `0.0.0.0:4200` do container e poderá ser acessada no navegador via `http://localhost:4200`.

### Executando localmente:

1. Execute o comando para instalar os pacotes necessários;
```bash
npm install
```
2. Instale a CLI do Angular;
```bash
npm install -g @angular/cli@15
```
3. Dentro da pasta do projeto, execute:
```bash
ng serve
```
1. A aplicação deve ser iniciada no endereço `http://localhost:4200`.
