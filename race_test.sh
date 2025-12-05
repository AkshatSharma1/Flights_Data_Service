#!/bin/bash

# Configuration
FLIGHT_ID=7
USER_ID=2
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJha3NoYXQuYWpheTA5MzFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjQ4NzE5ODcsImV4cCI6MTc2NDg3NTU4N30.oDlDShDzHGt5CzNkXUffolsCCFqUee3ExrbNI0FLk5I" 

echo "🚀 Starting Race Condition Test on Flight $FLIGHT_ID..."

# Function to make a booking request
make_booking() {
  curl -s -X POST http://localhost:3005/api/v1/bookings \
  -H "Content-Type: application/json" \
  -H "x-access-token: $TOKEN" \
  -d "{\"flightId\": $FLIGHT_ID, \"userId\": $USER_ID, \"noOfSeats\": 1}"
  echo "" # New line
}

# Fire 5 requests in parallel using '&'
make_booking &
make_booking &
make_booking &
make_booking &
make_booking &

# Wait for all to finish
wait
echo "✅ Test Complete."