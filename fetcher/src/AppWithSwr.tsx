import useSWR from 'swr'
import { App } from './App'

import SERVER_PORT from './config'
const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json())

export const AppWithSwr = () => {
  const { data, error } = useSWR(`http://localhost:${SERVER_PORT}/users`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <App data={data} />
}
