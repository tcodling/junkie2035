import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Chapter from './Chapter'

const App = () => {
  return (
    <>
    <h1>Junkie2035</h1>
    <Router>
      <Route path='/' component={Nav} />
      <Route path='/chapter/:id' component={Chapter} />
    </Router>
    </>
  )
}

export default App
