import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './slice/blogs';
import productsSlice from './slice/products';

const store = configureStore({
  reducer: {
    blogs: blogsSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
