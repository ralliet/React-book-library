const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require('cors')


const app = express();

app.use(cors()) // enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log("server is listening on port 4000");
})


