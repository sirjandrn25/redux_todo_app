import React, { useEffect } from 'react'
// import  {requesTodo,fetchTodo,addTodo,deleteTodo,updateTodo,todoError} from '../redux/TodoSlice';
import { getTodo,createTodo,removeTodo,updateTodo } from '../redux/asyncActions'
import { useSelector,useDispatch } from 'react-redux';

const TodoContainer = () => {
    const todo = useSelector(state=>state.todo);
    const dispatch = useDispatch();
    useEffect(()=>{
      
      dispatch(getTodo())
    
    },[dispatch])
    
  const handleCreate = ()=>{
    console.log("create new task")
    const new_todo ={
      id:todo.data.length+1,
      title:`${todo.data.length+1} task add`,
      complete:false
    }
    dispatch(createTodo(new_todo));
  }

  const hanldeUpdate = ()=>{
    const update_data = {
      title:`updated task ${todo.data.length}`,
      complete:true
    }
    dispatch(updateTodo(update_data,todo.data.length))
  }
  
  const handleDelete = ()=>{
    dispatch(removeTodo(todo.data.length))
  }

  return (
    <div>

      <h2>Welcome to Todo Container</h2>
      {/* <button onClick={handleFetch} >Fetch Items </button> */}
      {todo.status==="pending"?<h3>Loading ......</h3>:todo.status==="rejected"?<h3 style={{'color':"red"}}>{todo.error}</h3>:todo.status==="success"?todo.data.map(todo=>{
        return <h3 key={todo.id}>{todo.title}</h3>
      }):null}
      <p>
        <button onClick={handleCreate} >create new task</button> | {" "}
        <button onClick={handleDelete}>delete task {todo.data.length}</button> | {" "}
        <button onClick={hanldeUpdate}>update task {todo.data.length}</button>
      </p>
    </div>
  )
}

export default TodoContainer
