# frontend/Dockerfile

# ===== Build stage =====
FROM node:18-alpine AS build
WORKDIR /app

# Install deps with caching
COPY package*.json ./
RUN npm install

# Copy source and env (CRA reads env at build time)
COPY . .
COPY .env .env

# Build CRA -> /app/build
RUN npm run build

# ===== Runtime stage (Nginx) =====
FROM nginx:alpine

# SPA routing (prevents 404 on refresh/deep links)
RUN rm /etc/nginx/conf.d/default.conf
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
  listen 80;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  # Cache static assets
  location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?)$ {
    try_files \$uri =404;
    add_header Cache-Control "public, max-age=31536000, immutable";
    access_log off;
  }

  # CRA fallback
  location / {
    try_files \$uri /index.html;
  }
}
EOF

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
