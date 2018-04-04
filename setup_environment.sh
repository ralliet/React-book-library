#!/bin/sh
echo "starting up React Application" 
npm start --prefix client & 
echo "starting up GraphQL endpoint"
npm run dev:server --prefix server &
echo "starting up JSON/database server"
npm run json:server --prefix server &



