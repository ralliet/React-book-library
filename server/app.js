const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}));


app.listen(3000,() => {
    console.log("server is listening on port 3000");
})


