import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
export const getCastSeries = createAsyncThunk(
  "getCastSeries",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const cast = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFmZTZlMGY0ZTNkMDZhZmEwNGE5ODkwOWNlMzIxNSIsInN1YiI6IjY1NDRhMzllZmQ0ZjgwMDExZWNmZjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZB8KfTTdCk4rE7i2Nqy0L_YtMyvgzS62ieQu6-DmsE",
        },
      });
      return cast.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const castseries = createSlice({
  name: "castseries",
  initialState: {
    castmovie: [],
    castArt: [],
    castCrew: [],
    castSound: [],
    castCamera: [],
    castVisual_Effects: [],
    castCostume_Make_Up: [],
    castActing: [],
    castProdected: [],
    castDircted: [],
    castwriting: [],
    loadCast: false,
    errorCast: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCastSeries.pending, (state) => {
      state.loadCast = true;
      state.errorCast = null;
      //   console.log(state.castmovie);
    });
    builder.addCase(getCastSeries.fulfilled, (state, action) => {
      state.loadCast = false;
      state.errorCast = null;
      state.castmovie = action.payload;

      state.castArt = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Art";
      });
      state.castCrew = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Crew";
      });
      state.castCamera = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Camera";
      });
      state.castSound = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Sound";
      });
      state.castVisual_Effects = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Visual Effects";
      });
      state.castCostume_Make_Up = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Costume & Make-Up";
      });
      state.castDircted = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Directing";
      });
      state.castProdected = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Production";
      });
      state.castwriting = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Writing";
      });
      state.castActing = state.castmovie.crew.filter((preson) => {
        return preson.known_for_department === "Acting";
      });
      // console.log(state.castActing);
      // console.log(action.payload.crew);
    });
    builder.addCase(getCastSeries.rejected, (state, action) => {
      state.loadCast = false;
      state.errorCast = action.payload;
      // console.log(action);
      // console.log(state.castmovie);
    });
  },
});
export const castSeries = castseries.reducer;
