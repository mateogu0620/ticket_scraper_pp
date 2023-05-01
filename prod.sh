#!/bin/sh
# run our front-end against prod server
cd pp/app
echo "Changing directory to pp/app..."
export REACT_APP_BACKEND_BASE_URL=http://niravgolyalla.pythonanywhere.com
echo "Running front-end on the prod backend, i.e. $REACT_APP_BACKEND_BASE_URL"
npm start