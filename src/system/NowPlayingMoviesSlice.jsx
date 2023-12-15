import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const TopMoviesData = createAsyncThunk(
  "TopMoviesData",
  async (ID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: { language: "en-US", page: "1" },
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
const nowPlayingMOvies = createSlice({
  name: "nowPlayingMOvies",
  initialState: { movies: [], load: false, error: false },
  extraReducers: (builder) => {
    builder.addCase(TopMoviesData.pending, (state) => {
      state.load = true;
      state.error = false;
    });
    builder.addCase(TopMoviesData.fulfilled, (state, action) => {
      state.load = false;
      state.movies = action.payload.results;
    });
    builder.addCase(TopMoviesData.rejected, (state) => {
      state.load = false;
      state.error = true;
    });
  },
});
export default nowPlayingMOvies.reducer;
