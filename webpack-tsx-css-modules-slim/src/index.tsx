import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.scss'

const App = () => (
  <div className={styles.app}>
    Hello, world!
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))