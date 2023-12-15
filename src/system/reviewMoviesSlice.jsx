import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getMovieReview = createAsyncThunk(
  "hetMovieReview",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
        params: { language: "en-US" },
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
const movieReview = createSlice({
  name: "movieReview",
  initialState: { reviw: [], loadofReview: true, errorofdReview: null },
  extraReducers: (builder) => {
    builder.addCase(getMovieReview.pending, (state) => {
      state.loadofReview = true;
      state.errorofdReview = null;
    });
    builder.addCase(getMovieReview.fulfilled, (state, action) => {
      state.loadofReview = false;
      state.errorofdReview = null;
      state.reviw = action.payload.results;
      // console.log(state.reviw);
    });
    builder.addCase(getMovieReview.rejected, (state, actio) => {
      state.errorofdReview = actio.error;
      state.loadofReview = false;
    });
  },
});
export const MovieReviw = movieReview.reducer;
