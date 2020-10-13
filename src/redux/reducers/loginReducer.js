import * as actions from '../actions/loginAction';

const initialState =[{
    username:'',
    password:''
}]

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.handleInput:
            return [
                ...state,
                {
                    username:action.payload.username,
                    password:action.payload.password
                }
            ];
        case actions.handleSubmit:
            return 'submit';
        default:
            return state

    }
}

export default loginReducer;