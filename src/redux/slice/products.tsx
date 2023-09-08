import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productList',
  initialState: [
    {
      key: '1',
      id: '1',
      title: 'John Brown',
      author: 32,
      categories: 'New York No. 1 Lake Park',
      date: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      id: '2',
      title: 'John Brown 2',
      author: 32333,
      categories: 'New 3e4324e Park',
      date: 'New York Nosdfsdf Park',
    },
  ],
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default productsSlice;
