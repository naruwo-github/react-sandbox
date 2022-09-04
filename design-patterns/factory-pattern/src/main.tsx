import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useFetch } from './hooks/useFetch'

// APIからデータ取得
const data = useFetch()

// Factoryパターンで色々やる

// 結果をレンダリング先に渡す
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
)
