# etapa 1: builder
FROM node:18-alpine AS builder
WORKDIR /app

# Instala dependências
COPY package.json package-lock.json ./
RUN npm ci

# Copia o restante do código e gera o build
COPY . .
RUN npm run build

# etapa 2: runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copia apenas o que precisa para rodar em produção
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 2000
# Inicia o servidor Next.js
CMD ["npm", "start"]
