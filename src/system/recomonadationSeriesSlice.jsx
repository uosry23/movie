import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const get_reco_Series = createAsyncThunk(
  "Get_Series",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/recommendations`,
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
const reco_Series = createSlice({
  name: "reco_Series",
  initialState: {
    recomandation_Series: [],
    recomandation_Load: true,
    recomandation_Error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(get_reco_Series.pending, (state) => {
      state.recomandation_Load = true;
      state.recomandation_Error = null;
    });
    builder.addCase(get_reco_Series.fulfilled, (state, action) => {
      state.recomandation_Load = false;
      state.recomandation_Error = null;
      state.recomandation_Series = action.payload.results;
    });
    builder.addCase(get_reco_Series.rejected, (state, action) => {
      state.recomandation_Load = true;
      state.recomandation_Error = action.payload;
    });
  },
});
export const Reco_Series = reco_Series.reducer;
