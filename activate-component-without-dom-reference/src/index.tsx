import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const tentativeElement = document.createElement('div')
const tentativeRoot = ReactDOM.createRoot(tentativeElement)
tentativeRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
