import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getSearchMovies = createAsyncThunk(
  "searchMovies",
  async (word, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie`,
        params: {
          query: word,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
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
const searchMovie = createSlice({
  name: "moviesSearch",
  initialState: { searchmovies: [], loadsearch: true, erroresearch: null },
  extraReducers: (builder) => {
    builder.addCase(getSearchMovies.pending, (state) => {
      state.loadsearch = true;
    });
    builder.addCase(getSearchMovies.fulfilled, (state, action) => {
      state.loadsearch = false;
      state.erroresearch = null;
      console.log(action);
    });
    builder.addCase(getSearchMovies.rejected, (state, action) => {
      state.loadsearch = false;
      console.log(action);
    });
  },
});
export const serachMovies = searchMovie.reducer;
