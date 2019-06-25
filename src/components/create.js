import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todoActions';
import { Link } from 'react-router-dom';

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
                <div className="col-sm-3">
                    <button onClick={_ => this.props.add(this.text)} className="btn btn-default">Add</button>
                </div>
                <Link to="/">list</Link>
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
            let res;
            if (text)
                res = dispatch(addTodo(text));
            console.log('dispatched ', this, res);
            this.history.push('/');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);