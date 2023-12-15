import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AllSeriesDatails = createAsyncThunk(
  "AllSeriesDatails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}`,
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
const DetalisSeries = createSlice({
  name: "DetalisSeries",
  initialState: { detail: [], load: true, error: null },
  extraReducers: (builder) => {
    builder.addCase(AllSeriesDatails.pending, (state) => {
      state.load = true;
      state.error = false;
    });
    builder.addCase(AllSeriesDatails.fulfilled, (state, action) => {
      state.load = false;
      state.detail = action.payload;
      state.error = null;
    });

    builder.addCase(AllSeriesDatails.rejected, (state, action) => {
      state.load = false;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});
export default DetalisSeries.reducer;
