# Stage 1: Build the VitePress site
FROM node:24 AS builder

WORKDIR /app

# Copy only the necessary files
COPY package*.json ./
COPY src ./src
COPY .vitepress ./.vitepress

# Install dependencies and build the site
RUN npm install && npm run build

# Stage 2: Serve with Nginx
FROM nginxinc/nginx-unprivileged:alpine

# Copy built assets from builder
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]