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

export default {addlist,removeItem}