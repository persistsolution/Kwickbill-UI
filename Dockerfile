# Use a lightweight Node image with Bun pre-installed
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy only the package files to leverage Docker layer caching for dependencies
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install --no-cache

# Copy the rest of the application code into the container
COPY . .

# Expose the default development server port
EXPOSE 5174

# Set the default command to start the development server
CMD ["bun", "start"]
