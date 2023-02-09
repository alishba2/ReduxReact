import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import TodoReducer from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: TodoReducer
});
