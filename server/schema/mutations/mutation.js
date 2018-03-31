const graphql = require("graphql");
const axios = require("axios");
const { authorType,bookType,userType } = require("../types/types");
const _ = require('lodash');


const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

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
        },
        login: {
            type: userType,
            args: {
                email:  {type: GraphQLString },
                password: {type: GraphQLString }
            },
            resolve(parent,args) {
                return axios.get('http://localhost:3000/users/')
                .then(res => res.data);
            }
        },
        signup: {
            type: userType,
            args: {
                email:  {type: GraphQLString },
                password: {type: GraphQLString }
            },
            resolve(parent,args) {
                return axios.get('http://localhost:3000/users/')
                .then(res => res.data);
            }
        }
    }
})


module.exports = mutation;