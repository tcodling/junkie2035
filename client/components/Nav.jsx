import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <>
    <h1>Chapters</h1>
    <ul>
        <li><Link to='/chapter/1'>Chapter 1</Link></li>
        <li><Link to='/chapter/2'>Chapter 2</Link></li>
        <li><Link to='/chapter/3'>Chapter 3</Link></li>
    </ul>
    </>
  )
}

export default Nav