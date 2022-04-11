import axios from 'axios'
const addlist=(item)=>{
     return {
         type:"ADD_LIST",
         payload:item
     }
}

const removeItem=(id)=>{
     return {
         type:"REMOVE_ITEM",
         payload:id
     }
}

const loadTodo=()=>{
    return async dispatch =>{
       const todo = await axios.get("https://jsonplaceholder.typicode.com/todos")
       const data= await todo.data
    return dispatch({
        type:"LOAD_API",
         payload:data
    })
    }
}
export  {addlist,removeItem,loadTodo}