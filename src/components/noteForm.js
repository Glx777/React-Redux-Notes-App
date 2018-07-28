import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addNote} from '../actions/'

class NoteForm extends Component {
  render() {
    return (
      <div id="noteForm">
        <input type="text" ref="noteTitle" placeholder="Note title" /><br />
        <textarea ref="noteDetails" placeholder="Note details"></textarea><br />
        <button onClick={() => {
          if (this.refs.noteTitle.value !== '' && this.refs.noteDetails.value !== '') {
            this.props.addNote(this.refs.noteTitle.value, this.refs.noteDetails.value, new Date().toLocaleString("en-US", "weekday: short"))
            this.refs.noteTitle.value = ''
            this.refs.noteDetails.value = ''
          } else {
            alert('One of fields is empty!')
          }
        }}>Add Note</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addNote}, dispatch)
}

export default connect(() => {}, mapDispatchToProps)(NoteForm)
