import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'components/counter/counterSlice';
import menuReducer from 'components/NestedMenu/menuSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuReducer,
  },
});
