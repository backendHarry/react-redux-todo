import * as actions from '../actions/loginAction';

export const handleInput = (username, password) => {
    return {
        type:actions.handleInput,
        payload:{
            username,
            password
        }
    }
}