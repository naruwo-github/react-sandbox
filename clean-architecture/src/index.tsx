import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const dom = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(dom)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
