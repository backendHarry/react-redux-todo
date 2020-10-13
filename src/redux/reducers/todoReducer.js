// actions
import * as actions from "../actions/todoAction";

let initial_Id = 0;


const todoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        {
          id: initial_Id++,       //easy way to unshfit data, if you want a normal way just call state first
          description:action.payload.data,
          completed:false
        },
        ...state
      ];

    case actions.RESOLVE_TODO:
      return state.map(todo => todo.id === action.payload.id ? {...todo, completed:true}: todo)
      

    case actions.DELETE_TODO:
      console.log(action.payload.id)
      return state.filter(todo => todo.id !== action.payload.id)


    default:
      return state;
  }
};

export default todoReducer;

// export const reducer = (state=0, action) => {
//     switch(action.type) {
//         case actions.increment:
//             return state+1;
//         default:
//             return state;
//     }
// }
