import  {taskRequest,taskCreateSuccess,taskDeleteSuccess,taskFetchSuccess,taskRequestFailed,taskUpdateSuccess} from "./TodoSlice"
import axios from "axios"



const url = "https://my-json-server.typicode.com/sirjandrn25/redux_todo_app/todos"


const getConfig = (method,data,id)=>{

    let config = {
        url:`${url}/${id?id:''}`,
        method:method,
        data:data?data:null
    }

    return config

}

export const getTodo = ()=> async (dispatch)=>{
    dispatch(taskRequest());
    const config = getConfig('get')
    return await axios(config).then(resp=>{
        const data = resp.data;
        dispatch(taskFetchSuccess(data))
    }).catch(error=>{
        dispatch(taskRequestFailed(error.message))
    })

}

export const createTodo = (todo)=>async (dispatch)=>{
    dispatch(taskRequest())
    const config = getConfig("post",todo)
    
    return await axios(config).then(resp=>{
        const data = resp.data;
        dispatch(taskCreateSuccess(data));
        
    }).catch(error=>{
        
        dispatch(taskRequestFailed(error.message))
    })
}

export const removeTodo = (id)=>async(dispatch)=>{
    dispatch(taskRequest())
    const config = getConfig("delete",null,id);
    return await axios(config).then(resp=>{
        dispatch(taskDeleteSuccess(id))
    }).catch(error=>{
        console.log(error.message)
        dispatch(taskRequestFailed(error.message))
    })

}
export const updateTodo = (update_todo,id)=>async (dispatch)=>{
    dispatch(taskRequest())
    const config = getConfig("put",update_todo,id)
    return await axios(config).then(resp=>{
        const data = resp.data
        dispatch(taskUpdateSuccess(data));
        
    }).catch(error=>{
        console.log(error.message)
        dispatch(taskRequestFailed(error.message))
    })


}
