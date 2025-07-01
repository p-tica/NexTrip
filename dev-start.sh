#!/bin/bash

cleanup() {
    echo "Stopping services..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    docker-compose -f docker-compose-local.yml down
    exit
}

# Start nginx proxy
echo "Starting nginx proxy..."
docker-compose -f docker-compose-local.yml up -d

# Start backend
echo "Starting backend..."
cd backend
./gradlew bootRun &
BACKEND_PID=$!
cd ..

# Start frontend
echo "Starting frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "Development environment started!"
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:8080"
echo "App (via nginx): http://localhost:4444"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for interrupt
trap cleanup INT
wait