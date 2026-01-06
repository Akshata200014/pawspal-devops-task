# Use a lightweight Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the application code
COPY app.js .

# Security: Run as a non-root user
USER node

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]