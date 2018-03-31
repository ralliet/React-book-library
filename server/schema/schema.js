const graphql = require("graphql");
const mutation = require("./mutations/mutation");
const rootQuery = require("./queries/rootQuery");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation
});
 

