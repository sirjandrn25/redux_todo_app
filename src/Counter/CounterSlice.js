import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    loading:false
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            
            state.value +=1
        },
        decrement: state=>{
            state.value -=1
        },
        incrementByAmount: (state,action)=>{
            state.value += action.payload,
            state.loading = false
        },
        decrementByAmount: (state,action)=>{
            state.value -= action.payload
            
        },
        requestIncrement:(state)=>{
            state.loading = true
        }
        
    }
})


export const incrementAsync = amount=>dispatch=>{
    dispatch(requestIncrement())
    setTimeout(()=>{
        dispatch(incrementByAmount(amount))
    },10000);
}
export const {increment,decrement,incrementByAmount,decrementByAmount,requestIncrement} = counterSlice.actions

export default counterSlice.reducer;
