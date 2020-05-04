import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
  return (
    <div className='chapterList'>
    <h1 id='chapterHeading' className='subheading'>Chapters</h1>
    <ul>
    {props.chapters.sort(function(a, b) { 
      return a.fields.id - b.fields.id
      }).map(chapter => {
        return <Link key={chapter.fields.id} to={`/chapter/${chapter.fields.id}`}><li>{chapter.fields.title}</li></Link>
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