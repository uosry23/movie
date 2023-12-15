import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMovies = createAsyncThunk(
  "getmovies",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/popular`,
        params: { language: "en-US", page: id },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE",
        },
      });

      return data.data;
    } catch (E) {
      return rejectWithValue(E);
    }
  }
);

const Allmovies = createSlice({
  name: "allmovies",
  initialState: { movies: [], load: true, error: null, pagnum: 1 },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state) => {
      state.load = true;
      state.error = null;
      // console.log(state.movies);
    });
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.pagnum = action.payload.page;
      state.load = false;
      state.error = null;
      // console.log(state.movies);
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.load = false;
      state.error = action.error.message;
      // console.log(action);
    });
  },
});
export const Allmovie = Allmovies.reducer;
