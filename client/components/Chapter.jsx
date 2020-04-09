import React from 'react'
import {Link} from 'react-router-dom'


const Chapter = (props) => {
  return (
    <>
    <h1>Week {props.match.params.id}</h1>
    <p>ello ello ello</p>
    </>
  )
}

export default Chapter