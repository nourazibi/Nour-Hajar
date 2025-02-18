#!/bin/bash

# Create Docker network
docker network create backend-test-network

# Run MongoDB container
docker run -d --name db-container --network backend-test-network --network-alias db-container mongo

# Build and run Express API container
docker build -t express-project .
docker run -d --name express-app --network backend-test-network express-project
