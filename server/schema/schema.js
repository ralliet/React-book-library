const graphql = require("graphql");
const _ = require("lodash");

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;


let books = [
    {name:"name of the wind",genre:"Fantasy",id:"1"},
    {name:"The final empire",genre:"Fantasy",id:"2"},
    {name:"The long earth",genre:"Sci-fi",id:"3"},
];

let authors = [
    {name:"Patrick",age:44,id:"1"},
    {name:"Brandon",age:40,id:"2"},
    {name:"Terry",age:60,id:"3"},
]

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
                return _.find(books,{ id:args.id });
            }
        },
        author: {
            type: authorType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args) {
                return _.find(authors, { id:args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery 
});
 

