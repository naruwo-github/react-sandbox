import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Factory from './factory/factory'
import { useFetch } from './hooks/useFetch'

const data = useFetch()
const factory = new Factory()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App data={data} factory={factory} />
  </React.StrictMode>
)
