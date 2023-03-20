const { AppoloServer, ApolloServer, gql } = require('apollo-server')

const books = [
    {
        id: 0,
        title: '呪術廻戦',
        author: '芥見下々',
    },
    {
        id: 1,
        title: '朱色の仮面',
        author: '那波なばな',
    },
]

const typeDefs = gql`
    type Book {
        id: Int
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