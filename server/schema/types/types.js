const graphql = require("graphql");
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

//AuthorType
const authorType = new GraphQLObjectType ({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(bookType),
            //grab the data
            resolve(parent,args) {
                return axios.get('http://localhost:3000/books/')
                            .then((res) => {
                                return res.data.filter((book) => { return (book.authorId === parent.id) });
                            });
            }   
        } 
    })
});

//BookType 
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

module.exports = {
    authorType,
    bookType
}; 