import { gql, useQuery } from '@apollo/client'
import './App.css'

const books = gql`
  query {
    books {
      title
      author
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(books)
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error.</h2>

  return <div className="App">
    <h2>GraphQL Client</h2>
    {data.books.map(({ title, author }, index) => (
      <p key={index}>
        {`${title} : ${author}`}
      </p>
    ))}
  </div>
}

export default App
