import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const Chapter = (props) => {
  const chapter = props.chapters.find(chapter => chapter.fields.id == props.match.params.id)
  console.log(chapter)
  return (
    <div className='chapter'>
    <h1>{chapter.fields.title}</h1>
    <p>{chapter.fields.content}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps)(Chapter)