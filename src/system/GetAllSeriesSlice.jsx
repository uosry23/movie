import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetAllSeries = createAsyncThunk("getseries", async (id) => {
  try {
    const series = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular",
      params: { language: "en-US", page: id },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE",
      },
    });
    return series.data;
  } catch (e) {
    return e;
  }
});
const AllSeries = createSlice({
  name: "AllSeries",
  initialState: { series: [], load: true, error: false, pagenum: 1 },
  extraReducers: (builder) => {
    builder.addCase(GetAllSeries.pending, (state) => {
      state.load = true;
      state.error = false;
    });
    builder.addCase(GetAllSeries.fulfilled, (state, action) => {
      state.load = false;
      state.error = false;
      state.series = action.payload.results;
      state.pagenum = action.payload.page;
    });
    builder.addCase(GetAllSeries.rejected, (state) => {
      state.error = true;
      state.load = false;
    });
  },
});
export default AllSeries.reducer;
