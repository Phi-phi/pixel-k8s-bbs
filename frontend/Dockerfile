# Builder stage
FROM node:18 as builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Runner stage
FROM node:18 as runner
WORKDIR /app
COPY --from=builder /app . 
# 本番向けに Next.js を起動（ホストを 0.0.0.0 で指定）
CMD ["npm", "run", "start", "--", "-p", "3000", "-H", "0.0.0.0"]