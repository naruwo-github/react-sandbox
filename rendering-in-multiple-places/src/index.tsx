import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const domContents = document.querySelectorAll('#selected')

domContents.forEach(element => {
  const root = ReactDOM.createRoot(element)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})