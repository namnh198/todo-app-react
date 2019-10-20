import axios from 'axios';
import { ADD_TODO, GET_TODO, DELETE_TODO, LOAD_TODO, COMPLETE_TODO } from './constants';

axios.defaults.baseURL = 'http://localhost:5000/api';

export const getTodo = () => dispatch => {
    dispatch({ type: LOAD_TODO });

    axios.get('/todos')
        .then(res => dispatch({
            type: GET_TODO,
            payload: res.data
        }))
        .catch(err => console.log(err));
}

export const addTodo = (text) => dispatch => {
    axios.post('/todos/create', {text: text})
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        .catch(err => console.log(err));
}

export const deleteTodo = (todoId) => dispatch => {
    axios.post(`/todos/delete/${todoId}`)
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: res.data.todoId
        }))
        .catch(err => console.log(err));
}

export const completeTodo = (todoId) => dispatch => {
    axios.post(`/todos/complete/${todoId}`)
        .then(res => dispatch({
            type: COMPLETE_TODO,
            payload: res.data.todoId
        }))
        .catch(err => console.log(err));
}