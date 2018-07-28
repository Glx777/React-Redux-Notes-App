import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import './styles/styles.css'
import Header from './components/header'
import NoteForm from './components/noteForm'
import Notes from './components/notes'

const persistedState = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : {}
let store = createStore(reducers, persistedState)
store.subscribe(() => {
  localStorage.setItem('notes', JSON.stringify(store.getState()))
})


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NoteForm />
        <Notes />
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-container")
)
