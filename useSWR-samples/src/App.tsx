import useSWR from 'swr'

const fetcher = (...args: [string]) => fetch(...args).then(res => res.json())

export const App = () => {
  const {data, error} = useSWR('http://localhost:3001/users', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data}!</div>
}
