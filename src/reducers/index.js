import {combineReducers} from 'redux'
import {toggle, addNote, removeNote} from '../actions/'

const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      state = [...state, [action.title, action.details, action.time, action.visible]]
      break
    case 'REMOVE_NOTE':
      state = state.slice()
      state.splice(action.payload, 1)
      break
    case 'TOGGLE_VISIBILITY':
      state = state.slice()
      state[action.payload][3] = !state[action.payload][3]
      return state
      break
    default:
      return state
  }
  return state
}

const reducers = combineReducers({
  notes: tasksReducer
})

export default reducers
