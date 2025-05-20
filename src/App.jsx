import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import LoginComponent from "./pages/LoginComponent";
import Footer from "./component/Footer";
import SeriesDetails from "./pages/SeriesDetails";
import Loading from "./pages/LodiongPage";
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import('./pages/Movies'))
const Series = lazy(() => import('./pages/Series'))
const MoviesDetails = lazy(() => import('./pages/MoviesDetails'))
const Castformovie = lazy(() => import('./pages/Castformovie'))
const MovieReview = lazy(() => import('./pages/MovieReview'))
const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
