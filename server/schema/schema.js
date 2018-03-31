const graphql = require("graphql");
const rootQuery = require("./queries/rootQuery");
const mutation = require("./mutations/mutation");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation
});
 

