import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, fetchAll } from '../actions/todoActions';
import { Link } from 'react-router-dom';

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <ul>
                        {this.props.todos.map((e, i) => <li key={i}><input type="checkbox" checked={e.completed}
                            onChange={(e) => this.props.onToggle(i)} /> <Link to={`/todos/${i}`}>{e.name}</Link> </li>)}
                    </ul>
                </div>
                    <Link to="/create">create</Link>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggle: function (index) {
            dispatch(toggleTodo(index));
        },
        add: function(){
            dispatch(fetchAll());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);