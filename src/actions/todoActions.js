export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const API = 'API'
export const ADD_TODOS = 'ADD_TODOS'

export function addTodo(text) {
  return { type: ADD_TODO, payload: text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

function setTodos(payload) {
  return { type: ADD_TODOS, payload }
}

export function fetchAll() {
  console.log('fetchAll')
  return {
    type: API,
    payload: {
      url: '/todos.json',
      success: setTodos
    }
  };
}
