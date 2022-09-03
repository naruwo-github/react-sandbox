import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWithSwr } from './AppWithSwr'

const dom = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(dom)
root.render(
  <React.StrictMode>
    <AppWithSwr />
  </React.StrictMode>
)
