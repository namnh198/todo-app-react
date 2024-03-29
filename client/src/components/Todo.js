import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from './../actions';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleDelete() {
        this.props.deleteTodo(this.props.todo._id);
    }

    handleComplete() {
        this.props.completeTodo(this.props.todo._id);
    }

    render() {
        const { todo } = this.props;
        return (
            <li className={todo.complete ? 'checked' : ''} onClick={this.handleComplete}>
                <span>{ todo.text }</span>                
                <span onClick={this.handleDelete} className="close">&#10799;</span>
            </li>
        )
    }
}

export default connect(null, { deleteTodo, completeTodo })(Todo);