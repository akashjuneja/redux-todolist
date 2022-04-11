### React ,Redux and thunk

In Redux , there are three things 
1. View
2. Actions -- It tells what type of action will be performed 
  It is a normal js function only , which return object 
  eg:
 ```
  const addlist=(item)=>{
     return {
         type:"ADD_LIST",
         payload:item
     }
}
```
3. Reducer -its a brain of the redux ,here main thing takes place 
  reducer accepts two things state and action , initial state should be initialised
```
const todoReducer=(state=[], action)=>{
    if(action.type==="ADD_LIST"){
        console.log(state)
        return [...state,action.payload]
        
    }
}
```

how many reducers we make we have to combine them
4. Store
