import React,{useState} from 'react';

const Addtodo = () => {
    const [list, setlist] = useState("");
    return (
        <div>
            <input type="text"  val={list}  onChange={(e)=>{
                setlist(e.target.value)
            }} />
            {list}
        </div>
    );
}

export default Addtodo;
