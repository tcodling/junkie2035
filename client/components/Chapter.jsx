import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Chapter = (props) => {
  const chapter = props.chapters.find(chapter => chapter.fields.id == props.match.params.id)
  return (
    <div className='chapter'>
    {chapter ? (
      <>
      <h1 className='subheading'>{chapter.fields.title}</h1>
      <p>
      {chapter.fields.content.split("\n").map(line => {
        return (
          <span>{line}<br/></span>
        )
      })}
      </p>
      </>
    ) : 'loading'}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps)(Chapter)