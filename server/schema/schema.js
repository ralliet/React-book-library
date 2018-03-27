const graphql = require("graphql");
const _ = require("lodash");
const axios = require("axios");

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;


//define our schema
//the data of the graph(relationships,queries,mutations)
const bookType = new GraphQLObjectType ({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: authorType,
            //grab the data
            resolve(parent,args) {
                return axios.get('http://localhost:3000/authors/'+ parent.authorId)
                .then(res => res.data);
            }   
        }
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
                return axios.get('http://localhost:3000/authors/' + args.id)
                            .then(res => res.data);
            }
        }
        
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addBook: {
            type: bookType,
            args: {
                name: {type: GraphQLString},
                genre: {type: GraphQLString}
            },
            resolve(parent,args) {
                return axios.post('http://localhost:3000/books', {
                    name: args.name,
                    genre: args.genre
                })
                .then(res => res.data);
            }
        },
        deleteBook: {
            type: bookType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args) {
                return axios.delete('http://localhost:3000/books/' + args.id)
                .then(res => res.data);
            }
        },
        updateBook: {
            type: bookType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString },
                genre: {type: GraphQLString }
            },
            resolve(parent,args) {
                return axios.patch('http://localhost:3000/books/' + args.id, args)
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation
});
 

