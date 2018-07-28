import React, {Component} from 'react'
import {connect} from 'react-redux'
import Note from './note'

class Notes extends Component {
  render() {
    return (
      <div>
        <div id="line">
        </div>
        <div id="notes">
          {this.props.notes.map((note, i) =>
            <Note key={i} title={note[0]} details={note[1]} time={note[2]} noteId={i} visible={note[3]} />
          )}
        </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(Notes)
