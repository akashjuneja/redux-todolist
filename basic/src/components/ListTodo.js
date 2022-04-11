import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {removeItem}  from '../actions/index'
import {loadTodo} from '../actions/index'
export default function ListTodo() {
    const dispatch = useDispatch()
    const root = useSelector(state => state.todo)
    console.log(root)
    return (
        <div>
            {root.map((x,id)=>{
                return <><h1>{x.title}</h1>
                <button onClick={()=>{
                    dispatch(removeItem(id))
                }}>Delete</button>
                </>
            })}

            <button onClick={()=>{
                 dispatch(loadTodo())
            }}>Load data</button>
        </div>
    )
}
