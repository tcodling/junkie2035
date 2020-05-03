import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


// function createMarkup() {
//   return {__html: chapter.fields.content};
// }

const Chapter = (props) => {
  const chapter = props.chapters.find(chapter => chapter.fields.id == props.match.params.id)
  return (
    <div className='chapter'>
    {chapter ? (
      <>
      <h1>{chapter.fields.title}</h1>
      {/* <p>{chapter.fields.content}</p> */}
      <p dangerouslySetInnerHTML={{__html: chapter.fields.content.replace(/\n/g, "<br />")}}></p>
      </>
    ) : 'loading'}
    {/* replace(/\n/g, "<br />"); */}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps)(Chapter)