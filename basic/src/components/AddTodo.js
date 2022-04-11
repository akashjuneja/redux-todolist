import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addlist}  from '../actions/index'

const Addtodo = () => {
    const dispatch = useDispatch()
    const [list, setlist] = useState("");
    return (
        <div>
            <input type="text"  val={list}  onChange={(e)=>{
                setlist(e.target.value)
            }} />
            <button onClick={()=>{
              dispatch(addlist(list))
              setlist("")
            }}>Click</button>
            {list}
        </div>
    );
}

export default Addtodo;
