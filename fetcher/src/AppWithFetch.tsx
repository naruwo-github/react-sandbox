import { useFetch } from './hooks/useFetch'
import { App } from './App'

export const AppWithFetch = () => {
  const data = useFetch()

  return <App data={data} />
}