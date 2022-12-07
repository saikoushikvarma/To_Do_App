export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO"


export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: Math.trunc(Math.random() * 1000000)+1,
    task
  }
});

export const deleteTodo = (item) => ({
type: DELETE_TODO,
payload: {item}
})

export const editTodo = (item,task) => ({
    type: EDIT_TODO,
    payload: {item,task}
})