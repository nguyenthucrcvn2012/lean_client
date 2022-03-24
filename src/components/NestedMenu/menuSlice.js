import { createSlice } from '@reduxjs/toolkit';


/**
 * Handle Menu click
 * popup object (data popup)
 */
const initialState = {
  popup: {},
  mainGrid: {}
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      console.log(state, action)
      state.popup = action.payload;
    },
    mainGrid: (state, action) => {
      state.mainGrid = action.payload;
    },
  },
});

export const { openPopup, mainGrid } = menuSlice.actions;

export const selectPopup = (state) => state.menu.popup;

export const selectMainGrid = (state) => state.menu.mainGrid;

export default menuSlice.reducer;
