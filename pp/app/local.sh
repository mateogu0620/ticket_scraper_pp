#!/bin/sh
# run our front-end against local server
export REACT_APP_BACKEND_BASE_URL=http://127.0.0.1:8000
echo "Running front-end on the local backend, i.e. $REACT_APP_BACKEND_BASE_URL"
npm start