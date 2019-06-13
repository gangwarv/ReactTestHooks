import React, { Component } from 'react';
import store from '../store/store';
import { addTodo } from './../actions/todoActions';

class List extends Component {
    constructor() {
        super();
        store.subscribe(() => {
            console.log('subscribed ', store.getState());
            this.setState({
                todos: [...store.getState().todos]
            })
        });
        this.state = {
            todos: [
            ]
        };
    }
    add = () => {
        store.dispatch(addTodo(this.state.text));
        this.setState({ text: '' });
    }
    onChange = (e) => {
        this.setState({ text: e.target.value });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map((e, i) => <li key={i}><input type="checkbox" readOnly checked={e.completed} /> {e.name} </li>)}
                </ul>
                <input type="text" onChange={this.onChange}/>
                <button onClick={this.add}>Add</button>
            </div >
        )
    }
}

export default List;