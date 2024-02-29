# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de origem do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Instale as dependências
RUN npm install

# Execute o comando de construção
RUN npm run build

# Exponha a porta em que o aplicativo será executado (se necessário)
# EXPOSE 3000

# Defina o comando padrão para iniciar o aplicativo
CMD ["npm"]
