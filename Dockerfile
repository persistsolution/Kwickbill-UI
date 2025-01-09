# Use a base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install bash, curl, and bun
RUN apk add --no-cache bash curl \
    && curl -fsSL https://bun.sh/install | bash

# Add bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy package.json into the container
COPY package.json ./

# Install dependencies using bun
RUN bun install

# Copy the rest of the application
COPY . .

# Specify the default command
CMD ["bun", "start"]
