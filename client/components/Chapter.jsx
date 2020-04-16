import React from 'react'
import {Link} from 'react-router-dom'

import chapters from '../../chapters/chapters'


const Chapter = (props) => {
  return (
    <div className='chapter'>
    <h1>{chapters[props.match.params.id-1].title}</h1>
    {chapters[props.match.params.id-1].paragraphs.map(paragraph => <p>{paragraph}</p>)}
    </div>
  )
}

export default Chapter