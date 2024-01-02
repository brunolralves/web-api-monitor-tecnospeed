# Use uma imagem Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install


# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

RUN npm run build

# Exponha a porta que a aplicação irá escutar
EXPOSE 3033



# Comando para iniciar a aplicação
CMD ["npm", "start"]
