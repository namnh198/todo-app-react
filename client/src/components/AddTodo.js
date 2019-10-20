import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        if(e.key === 'Enter') {
            this.props.addTodo(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <input onKeyPress={this.handleSubmit} placeholder="Enter an activity.."></input>
            </div>
        )
    }
}

export default connect(null, { addTodo }) (AddTodo);