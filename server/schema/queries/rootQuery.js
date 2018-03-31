const graphql = require("graphql");
const axios = require("axios");
const { authorType,bookType } = require("../types/types");

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const rootQuery = new GraphQLObjectType ({
    name: "rootQueryType",
    fields: {
        book: {
            type: bookType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args) {
                return axios.get('http://localhost:3000/books/'+ args.id)
                .then(res => res.data);
                //return _.find(books,{ id:args.id });
            }
        },
        books: {
            type: new GraphQLList(bookType),
            args: { genre: { type: GraphQLString }},
            resolve(parent,args) {
                return axios.get('http://localhost:3000/books/')
                            .then(res => res.data);
            }
        },
        author: {
            type: authorType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args) {
                return axios.get('http://localhost:3000/authors/' + args.id)
                            .then(res => res.data);
            }
        }
        
    }
});

module.exports = rootQuery;