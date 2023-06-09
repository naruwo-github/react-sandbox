import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.scss'

const App = () => (
  <div className={styles.app}>
    <h1>Hello, world!</h1>
    <button className={styles.button} onClick={() => alert('Button clicked!')}>
      Click me!
    </button>
    <div className={styles.inputContainer}>
      <label htmlFor="name" className={styles.label}>Your name:</label>
      <input id="name" type="text" placeholder="Type here..." className={styles.input} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
