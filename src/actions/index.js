export const addNote = (noteTitle, noteDetails, dateAdded) => ({
  type: 'ADD_NOTE',
  title: noteTitle,
  details: noteDetails,
  time: dateAdded,
  visible: false
})

export const removeNote = noteId => ({
  type: 'REMOVE_NOTE',
  payload: noteId
})

export const toggle = noteId => ({
  type: 'TOGGLE_VISIBILITY',
  payload: noteId
})
