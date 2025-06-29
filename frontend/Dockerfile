# ---------- build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# install deps
COPY package*.json ./
RUN npm ci

# build Vite bundle
COPY . .
RUN npm run build          # outputs to /app/dist

# ---------- runtime stage ----------
FROM node:20-alpine
WORKDIR /app

# lightweight static file server
RUN npm install --global serve

# copy pre-built assets
COPY --from=build /app/dist ./dist

EXPOSE 80
# -s  = serve static files
# -l 80 = listen on port 80, 0.0.0.0 by default
CMD ["serve", "-s", "dist", "-l", "80"]
