import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiCall from '../../utils/httpRequest';
const categoriesBlogSlice = createSlice({
  name: 'categoriesBlog',
  initialState: {
    status: 'loading',
    data: []
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesBlog.pending, (state: any, action) => {
        console.log('action fetch category', action);
        state.status = 'loading';
      })
      .addCase(fetchCategoriesBlog.fulfilled, (state: any, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(addCategoryBlog.pending, (state: any, action) => {
        state.status = 'loading';
        console.log('action pending', action);
      })
      .addCase(addCategoryBlog.fulfilled, (state: any, action: any) => {
        state.status = 'success'
        console.log('action add category', action);
      })
  }
})

export const fetchCategoriesBlog: any = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      return await apiCall('categories_blog', 'GET', null, null).then((res: any) => {
        return res.data;
      })
    } catch (error) {
      console.log(error);
    }
  }
)

export const addCategoryBlog: any = createAsyncThunk(
  'categories/addCategory',
  async (data) => {
    try {
      const headers: any = { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

      return await apiCall('categories_blog', 'POST', data, headers).then((res: any) => {
        return res.data;
      })
    } catch (error) {
      console.log(error);
    }
  }
)

export default categoriesBlogSlice;