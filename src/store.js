import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Counter/CounterSlice';
import todoReducer from './Todo/redux/TodoSlice';
const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,
    },
})

export default store