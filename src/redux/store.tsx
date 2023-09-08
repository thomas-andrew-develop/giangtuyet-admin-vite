import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './slice/blogs';
import productsSlice from './slice/products';
import categoriesSlice from './slice/categoriesBlog'

const store = configureStore({
  reducer: {
    blogs: blogsSlice.reducer,
    categoriesBlog: categoriesSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
