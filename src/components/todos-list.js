import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, fetchAll } from '../actions/todoActions';

class List extends Component {
    em = ':smile:';
    constructor(props) {
        super(props);
        //props.add()
    }
    componentDidMount() {
        // fetch('/todos.json')
        //     .then(res => res.json())
        //     .then(d => {
        //         //console.log(d);
        //         this.props.add(d[0].name);
        //         this.props.add(d[1].name);
        //     })
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    {this.em}
                    <ul>
                        {this.props.todos.map((e, i) => <li key={i}><input type="checkbox" checked={e.completed}
                            onChange={(e) => this.props.onToggle(i)} /> {e.name} </li>)}
                    </ul>
                </div>
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