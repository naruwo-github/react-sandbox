const { AppoloServer, ApolloServer, gql } = require('apollo-server')

const books = [
    {
        title: '呪術廻戦',
        author: '芥見下々',
    },
    {
        title: '朱色の仮面',
        author: '那波なばな',
    },
]

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`

const resolvers = {
    Query: {
        books: () => books,
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
})