const graphql = require("graphql");
const _ = require("lodash");
const axios = require("axios");

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;


//define our schema
//the data of the graph(relationships,queries,mutations)
const bookType = new GraphQLObjectType ({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })  
})

const authorType = new GraphQLObjectType ({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

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
                return axios.get('http://localhost:3000/author/' + args.id)
                            .then(res => res.data);
            }
        }
        
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery 
});
 

