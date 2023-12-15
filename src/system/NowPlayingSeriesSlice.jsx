import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const TopSeriesData = createAsyncThunk("TopSeriesData", async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/tv/day",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE",
      },
    });
    return data.data;
  } catch (E) {
    return E;
  }
});
const nowPlayingSeries = createSlice({
  name: "nowPlayingSeries",
  initialState: { series: [], load: false, error: false },
  extraReducers: (builder) => {
    builder.addCase(TopSeriesData.pending, (state) => {
      state.load = true;
      state.error = false;
    });
    builder.addCase(TopSeriesData.fulfilled, (state, action) => {
      state.load = false;
      state.series = action.payload.results;
    });
    builder.addCase(TopSeriesData.rejected, (state) => {
      state.load = false;
      state.error = true;
    });
  },
});
export default nowPlayingSeries.reducer;
