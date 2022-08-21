import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json())

export const App = () => {
  const {data, error} = useSWR('http://localhost:3001/users', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <React.Fragment>
      {(data as string[]).map((user: string, index: number) => {
        return <h1 key={index}>Hi {user}!</h1>
      })}
    </React.Fragment>
  )
}
