import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
  return (
    <div className='chapterList'>
    <h1>Chapters</h1>
    <ul>
    {props.chapters.map(chapter => {
      return <Link to={`/chapter/${chapter.fields.id}`}><li key={chapter.fields.id}>{chapter.fields.title}</li></Link>
    })}
    </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps)(Nav)