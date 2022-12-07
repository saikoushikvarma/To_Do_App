import { ADD_TODO,DELETE_TODO,EDIT_TODO } from "./action";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      return {
        ...state,
        todos: [ ...state.todos, { id, task }]
      };
    }
    case DELETE_TODO: {
      const {item} = action.payload;
      let filteredObj = state?.todos?.filter(el=>el.id !== item.id);
      return{
        ...state,
        todos: [...filteredObj]
      }
    }
    case EDIT_TODO: {
      debugger
      const {item,task} = action.payload;
      let filtereobj = state?.todos?.find(el => el.id === item.id);
      let filteredObjs = state?.todos?.filter(el=>el.id !== item.id);
      if(filtereobj){
        let obj = {id:filtereobj.id, task:task};
        filteredObjs.push(obj)
        return {
          ...state,
          todos: [...filteredObjs]
        }
      }
    }
    default:
      return state;
  }
}

export default todoReducer;