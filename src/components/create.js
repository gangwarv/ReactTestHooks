import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todoActions';

class Create extends Component {
    text = "";
    onChange = (e) => {
        this.text = e.target.value;
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-4 form-group">
                    <input type="text" className="form-control" onChange={this.onChange} />
                </div>
                <button onClick={_ => this.props.add(this.text)} className="btn btn-default">Add</button>
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
        add: function (text) {
            dispatch(addTodo(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);