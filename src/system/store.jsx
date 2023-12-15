import { configureStore } from "@reduxjs/toolkit";
import { Allmovie } from "./GetAllMoviesSlice";
import AllSeries from "./GetAllSeriesSlice";
import DetalisMovies from "./DetailsMoviesSlice";
import nowPlayingMOvies from "./NowPlayingMoviesSlice";
import nowPlayingSeries from "./NowPlayingSeriesSlice";
import TopMoviesData from "./getTopMovies";
import TopSeriesData from "./getSeries";
import { castMovies } from "./castMoviesSlice";
import { MovieReviw } from "./reviewMoviesSlice";
import { keywords } from "./keywordsformovies";
import { serachMovies } from "./searchformovies";
import { movieVedios } from "./movievedios";
import DetalisSeries from "./GetallSeriesDetails";
import { seriesvideo } from "./seriesvedios";
import { castSeries } from "./castofseries";
import { Reco_Series } from "./recomonadationSeriesSlice";
import { serieskeys } from "./keywordsForSeries";

const store = configureStore({
  reducer: {
    Allmovie,
    castSeries,
    seriesvideo,
    AllSeries,
    DetalisMovies,
    DetalisSeries,
    nowPlayingMOvies,
    nowPlayingSeries,
    TopMoviesData,
    TopSeriesData,
    castMovies,
    MovieReviw,
    keywords,
    serieskeys,
    serachMovies,
    movieVedios,
    Reco_Series,
  },
});
export default store;
