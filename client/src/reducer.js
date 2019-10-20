import { ADD_TODO, GET_TODO, DELETE_TODO, LOAD_TODO, COMPLETE_TODO } from './constants';

const initialState = {
    loading: false,
    todos: [],
}

export default function( state = initialState, action ) {
    switch (action.type) {
        case GET_TODO: 
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos:  state.todos.filter(todo => todo._id !== action.payload)
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos:  state.todos.map(todo => {
                    if(todo._id === action.payload) {
                        return {
                            ...todo,
                            complete: !todo.complete
                        }
                    }

                    return todo;
                })
            }
        case LOAD_TODO: 
            return {
                ...state,
                loading: true,
            }
        default: 
        return state
    }
}