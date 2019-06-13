import { VisibilityFilters, ADD_TODO, TOGGLE_TODO } from '../actions/todoActions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [
        {
            name: 'Apple 2',
            completed: false
        }
    ]
}

function todoReducer(state = initialState, action) {
    // if (typeof state === 'undefined') {
    //   return initialState
    // }
    switch (action.type) {
        case ADD_TODO: return Object.assign({}, state, { todos: [...state.todos, {name:action.payload, completed:false}] });
        case TOGGLE_TODO: return Object.assign({}, state, {
            todos: state.todos.map((todo, i) => {
                if (i === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                } else {
                    return todo;
                }
            })
        })
        default: return state;
    }
}
export default todoReducer;