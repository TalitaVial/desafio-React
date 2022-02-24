import React from 'react'
import ReactDOM from 'react-dom'

import Main from './Main'
import Header from './Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
