import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import axios from "axios";

export const AllDatails = createAsyncThunk("datalis", async (id) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE",
      },
    });
    return data.data;
  } catch (e) {
    return e;
  }
});
const DetalisMovies = createSlice({
  name: "MOviesDtails",
  initialState: { detail: null, load: true, error: false },
  extraReducers: (builder) => {
    builder.addCase(AllDatails.pending, (state) => {
      state.load = true;
      state.error = false;
    });
    builder.addCase(AllDatails.fulfilled, (state, action) => {
      state.load = false;
      state.detail = action.payload;
    });

    builder.addCase(AllDatails.rejected, (state) => {
      state.load = false;
      state.error = true;
    });
  },
});
export default DetalisMovies.reducer;
