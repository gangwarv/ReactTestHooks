import { ADD_TODO, ADD_TODOS, TOGGLE_TODO } from '../actions/todoActions'

const initialState = {
    todos: []
}

function todoReducer(state = initialState, action) {
    console.log('reducer',action)

    switch (action.type) {
        case ADD_TODO: return Object.assign({}, state, { todos: [...state.todos, { name: action.payload, completed: false }] });

        case TOGGLE_TODO:
            return Object.assign({}, state, {
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

        // case API: 
        // console.log(action.payload)
        //return Object.assign({}, state, { todos: action.payload })
        case ADD_TODOS:
            console.log('adding', action)
            return Object.assign({}, state, { todos: action.payload })

        default: return { ...state };
    }
}
export default todoReducer;