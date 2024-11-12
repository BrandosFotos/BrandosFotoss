# Use official Node.js 18 image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) first to leverage Docker cache
COPY ./brandosfotos/package.json ./brandosfotos/package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY ./brandosfotos /app

# Run the Next.js build process
RUN npm run build

# Expose port 3000 for the container
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]