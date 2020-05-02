import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import {fetchChapters} from '../actions/chapters'
import {connect} from 'react-redux'

import Nav from './Nav'
import Chapter from './Chapter'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchChapters())
  }

  render() {
    return (
      <>
      <h1 id='title'>Junkie2035</h1>
      <p id='author'>by Felix Clarke</p>
      <Router>
        <Route path='/' component={Nav} />
        <Route path='/chapter/:id' component={Chapter} />
      </Router>
      </>
    )
  }
}

export default connect()(App)
