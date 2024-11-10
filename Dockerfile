# Étape 1 : Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code et construire l'application
COPY . .
RUN npm run build

# Étape 2 : Serveur de production
FROM node:18-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Exposer le port de l'application
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
