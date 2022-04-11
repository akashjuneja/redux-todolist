const todoReducer=(state=[], action)=>{
    if(action.type==="ADD_LIST"){
        console.log(state)
        return [...state,action.payload]
        
    }
    else if(action.type==="REMOVE_ITEM"){
        console.log(action.payload)
        return state.filter((item, index)=>
            index!==action.payload
        
        )
    }
    else if(action.type==="LOAD_API"){
        console.log("dff")
        return action.payload
    }
    return state
}

export default todoReducer