import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodo } from './../actions';
import Todo from './Todo';

class ListTodos extends Component {
    componentDidMount() {
        this.props.getTodo();
    }

    render() {
        const { todos } = this.props;

        return (
            <ul className="todo">
                {
                    todos.map(todo => <Todo key={ todo._id } todo={ todo } />)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
}) 

export default connect(mapStateToProps, { getTodo })(ListTodos);