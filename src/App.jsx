import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import MoviesDetails from "./pages/MoviesDetails";
import Castformovie from "./pages/Castformovie";
import "./App.css";
import MovieReview from "./pages/MovieReview";
import LoginComponent from "./pages/LoginComponent";
import Footer from "./component/Footer";
import SeriesDetails from "./pages/SeriesDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/movies/details/:id/review" element={<MovieReview />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/details/:id" element={<MoviesDetails />} />
        <Route path="/series/details/:id" element={<SeriesDetails />} />

        <Route path="/series" element={<Series />} />
        <Route path="/movies/details/:id/cast" element={<Castformovie />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
