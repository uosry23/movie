import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getmoviekeywords = createAsyncThunk(
  "movieskey",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE",
        },
      });
      return data.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const movieKeywords = createSlice({
  name: "movieKey",
  initialState: { keywords: [], loadKey: true, errorKey: null },
  extraReducers: (builder) => {
    builder.addCase(getmoviekeywords.pending, (state) => {
      state.loadKey = true;
      state.errorKey = null;
    });
    builder.addCase(getmoviekeywords.fulfilled, (state, action) => {
      state.loadKey = false;
      state.keywords = action.payload.keywords;
      //   console.log(action.payload.keywords);
    });
    builder.addCase(getmoviekeywords.rejected, (state, action) => {
      state.loadKey = false;
      state.errorKey = action.payload;
    });
  },
});
export const keywords = movieKeywords.reducer;
