import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiCall from '../../utils/httpRequest';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'loading',
    blogs: []
  },
  reducers: {
    addBlog: (state, action: any) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state: any, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state: any, action) => {
        state.status = "success";
        state.blogs = action.payload;
      })
  }
});

export const fetchBlogs: any = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    try {
      return await apiCall('blogs', 'GET', null).then((res: any) => {
        return res.data;
      });
    } catch (err) {
      // custom error
    }
  }
)

export default blogsSlice;
