import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getseriesvideo = createAsyncThunk(
  "getseriesvideo",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/videos`,
        params: { language: "en-US" },
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
const vedios = createSlice({
  name: "movieVedios",
  initialState: { vedios: [], load: true, error: null },
  extraReducers: (builder) => {
    builder.addCase(getseriesvideo.pending, (state) => {
      state.load = true;
      state.error = null;
    });
    builder.addCase(getseriesvideo.fulfilled, (state, action) => {
      state.load = false;
      state.error = null;
      state.vedios = action.payload.results;
    });

    builder.addCase(getseriesvideo.rejected, (state, action) => {
      state.load = false;
      state.error = action.payload;
    });
  },
});
export const seriesvideo = vedios.reducer;
