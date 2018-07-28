import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggle, removeNote} from '../actions/'

class Note extends Component {
  render() {
    return (
      <div class="note">
        <div class="upPart">
          <div class="title">{this.props.title}</div>
          <div class="rightSide">
            <div class="rightSideDiv">
              <span>Added on: {this.props.time}</span>
              <div class="buttons">
                <span class="show" onClick={() => {
                  this.props.toggle(this.props.noteId)
                }}>{
                  this.props.visible ?
                  '(Hide details)' :
                  '(Show details)'
                }</span>
                <span class="remove" onClick={() => {this.props.removeNote(this.props.noteId)}}>(Remove note)</span>
              </div>
            </div>
          </div>
        </div>
        { this.props.visible ?
          <div class="details">
            <div class="line2"></div>
            <p>Details: {this.props.details}</p>
          </div> :
          ''
          }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({toggle, removeNote}, dispatch)

export default connect(() => {}, mapDispatchToProps)(Note)
