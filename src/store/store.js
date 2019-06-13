import { createStore } from 'redux';
import todoReducer from './../reducers/todoReducer';

const initialState = {
    todos: [
        {
            name: 'Apple',
            completed: false
        },
        {
            name: 'Boy',
            completed: true
        }
    ]
}
const store = createStore(todoReducer, initialState);

export default store; 