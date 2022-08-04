import React from 'react';
import ReactDOM from 'react-dom/client'

type DomContents = {
  domContents: NodeListOf<Element>
}

export const App = (props: DomContents) => {
  props.domContents.forEach(element => {
    const root = ReactDOM.createRoot(element)
    root.render(
      <Content />
    )
  })
  return null
}

const Content = () => {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      React.js Official Site
    </a>
  )
}