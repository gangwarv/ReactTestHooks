import React from 'react';
import { connect } from 'react-redux';

function Todo(props) {
    return (
        <div>
            <p>Name: {props.todo.name}</p>
            <p>Completed: {props.todo.completed?'YES':'NO'}</p>
        </div>
    )
}


const mapStateToProps = (state, props)=>{
console.log(props)
    return {
        todo: state.todos[+props.match.params.index]
    }
}

export default connect(mapStateToProps)(Todo);