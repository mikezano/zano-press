# Stage 1: Build the VitePress site
FROM node:24 AS builder

# Set the NODE_ENV environment variable (default to production)
ARG VITEPRESS_ENV=production
ENV VITEPRESS_ENV=$NODE_ENV

WORKDIR /app

# Copy necessary files
COPY package*.json ./
COPY src ./src
COPY .vitepress ./.vitepress
COPY .env ./.env

# Install dependencies and build the site
RUN npm install && npm run build

# Stage 2: Serve with Nginx
FROM nginxinc/nginx-unprivileged:alpine

# Copy built assets from builder
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]