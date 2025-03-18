# ベースイメージとして公式の Node.js LTS を利用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json（存在すれば）をコピー
COPY package*.json ./

# 依存パッケージをインストール（本番向けに --only=production を検討可）
RUN npm install

# アプリケーションのソースコードを全てコピー
COPY . .

# NestJS のビルドを実行（これにより dist/ ディレクトリが生成される）
RUN npm run build

# プロダクションモードでアプリを起動（dist/main.js が実行される）
CMD ["npm", "run", "start:prod"]