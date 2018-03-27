ECHO "Startup react app"
cd client
start npm run start
ECHO "Startup graphql server & JSON server"
cd ../server
start npm run dev:server
start npm run json:server