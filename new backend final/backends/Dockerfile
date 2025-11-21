# 1) Base image
FROM node:18-alpine

# 2) Work directory inside container
WORKDIR /usr/src/app

# 3) Install dependencies
COPY package*.json ./
RUN npm install

# 4) Copy source code
COPY . .

# 5) Environment (change if your backend uses another port)
ENV PORT=5000

# 6) Expose the port
EXPOSE 5000

# 7) Start command (change if your package.json uses another script)
CMD ["npm", "run", "dev"]
