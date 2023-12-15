/**const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE'
    }**/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const TopSeries20Data = createAsyncThunk(
  "TopSeriesData",
  async (s, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
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
const TopSeriesData = createSlice({
  name: "nowPlayingMOvies",
  initialState: { topseries: [], load: false, errorofseries: null },
  extraReducers: (builder) => {
    builder.addCase(TopSeries20Data.pending, (state) => {
      state.load = true;
      state.errorofseries = null;
    });
    builder.addCase(TopSeries20Data.fulfilled, (state, action) => {
      state.load = false;
      state.topseries = action.payload.results;
    });
    builder.addCase(TopSeries20Data.rejected, (state, action) => {
      state.load = false;
      state.errorofseries = action.error.messege;
      // console.log(action.error.message);
    });
  },
});
export default TopSeriesData.reducer;
