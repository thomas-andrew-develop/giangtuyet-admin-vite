import { createSlice } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
  name: 'blogList',
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default blogsSlice;
