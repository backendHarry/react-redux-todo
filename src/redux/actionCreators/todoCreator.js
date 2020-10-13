import * as actions from '../actions/todoAction';

export const addTodo = (todoItem) => {
    return {
        type:actions.ADD_TODO,
        payload: {
            data:todoItem
        }
    }
}

export const resolveTodo = (id) => {
    return {
        type:actions.RESOLVE_TODO,
        payload:{
            id
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type:actions.DELETE_TODO,
        payload:{
            id
        }
    }
}

