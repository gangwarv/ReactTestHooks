import { createStore, applyMiddleware, compose } from 'redux';
import todoReducer from './../reducers/todoReducer';
import { API, fetchAll } from './../actions/todoActions';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    console.log('middleware', action)
    if (action.type !== API) {
        return next(action);
    }

    console.log('api mdw', action)
    fetch(action.payload.url)
        .then(res => res.json())
        .then(data => {
            dispatch(action.payload.success(data))
        });

}
function apiMiddleware2({ getState }) {
    return (next) =>
        (action) => {
            const console = window.console;
            const prevState = getState();
            const returnValue = next(action);
            const nextState = getState();
            const actionType = String(action.type);
            const message = `action ${actionType}`;
            console.log(`%c prev state`, `color: #9E9E9E`, prevState);
            console.log(`%c action`, `color: #03A9F4`, action);
            console.log(`%c next state`, `color: #4CAF50`, nextState);
            return returnValue;
        };
}
const store = createStore(todoReducer,
    { todos: [] },
    compose(
        applyMiddleware(apiMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(fetchAll())

export default store; 