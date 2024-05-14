import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useFetcher} from "react-router-dom"

function TodoPage()
{
    const instyle={
        color:'blue',
        fontSize:'20px',
        backgroundColor:'lightgrey',
        display:'flex'
    }
    const [todolist,setTodolist]=useState([])
    async function getTodolist(){
        const res=await axios.get("http://localhost:3000/")
        setTodolist(res.data);
    }
    useEffect(()=>{
        getTodolist();
    },[]);

    return(
        <div>{
            todolist.map((todo, index)=>
            <div style={instyle}>
                <p >{index+1}</p>
                <input type="checkbox" checked={todo.iscompleted ? true:false}/>
                <p>{todo.name}</p>
            </div>
            )
        }</div>
    )
}

export default TodoPage