import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[],
    error:null,
    status:"idle"|"pending"|"success"|"rejected"
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        taskRequest:(state)=>{
            state.status = "pending"
        },
        taskRequestFailed: (state,action)=>{
            state.status = "rejected",
            state.error = action.payload
        },
        taskCreateSuccess:(state,action)=>{
            state.status = "success",
            state.data = [action.payload,...state.data]
        },
        taskFetchSuccess: (state,action)=>{
            state.status = "success",
            state.data = action.payload
        },
        taskDeleteSuccess:(state,action)=>{
            state.status = "success",
            state.data = state.data.filter(todo=>todo.id === action.payload)
        },
        taskUpdateSuccess: (state,action)=>{
            state.status = "success",
            state.data = state.data.map(todo=>todo.id===action.payload.id?action.payload:todo)
        }
    }

})

export const {taskRequest,taskCreateSuccess,taskDeleteSuccess,taskFetchSuccess,taskRequestFailed,taskUpdateSuccess} = todoSlice.actions

export default todoSlice.reducer