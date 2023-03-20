import { gql, useQuery } from '@apollo/client'

const books = gql`
  query {
    books {
      id
      title
      author
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(books)
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error.</h2>

  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      {data.books.map(({ id, title, author }) => (
        <p key={id}>
          {`${id} : ${title} : ${author}`}
        </p>
      ))}
    </div>
  )
}

export default App
