import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { TopSeries20Data } from "../system/getSeries";
import { TopMovies20Data } from "../system/getTopMovies";
import { CardText } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export const CardsHome = () => {
  const dispatch = useDispatch("");
  const { topmovies, errorofmovies } = useSelector(
    (state) => state.TopMoviesData
  );
  const { topseries, errorofseries } = useSelector(
    (state) => state.TopSeriesData
  );
  useEffect(() => {
    dispatch(TopSeries20Data());
    dispatch(TopMovies20Data());
  }, []);
  return (
    <div>
      {errorofseries && <ErrorPage />}
      <div className="container row justify-content-center align-items-center  gap-4 p-3 w-100">
        <h1 className="text-info "> Top Movies</h1>

        {topmovies.map((movie) => (
          <Card
            className="rounded p-0 "
            style={{ width: "18rem", border: "none" }}
            key={movie.id}
          >
            <Card.Img
              loading="lazy"
              variant="top"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            />
            <Card.Body className="bg bg-dark">
              <Card.Title className="w-100">
                <span className="text-info">TITLE:</span>{" "}
                <span className="text-light">{movie.title}</span>
              </Card.Title>
              <div className="d-flex justify-content-between">
                <div className="text-center mt-1">
                  {" "}
                  <span className="text-light"> Rate:</span>{" "}
                  <span className="text-info">{movie.vote_average}</span>
                </div>{" "}
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={movie.vote_average / 2.0}
                    edit={false}
                  />
                </div>
              </div>
              <Link to={`/movies/details/${movie.id}`}>
                {" "}
                <button type="button" className="btn btn-outline-info">
                  Details
                </button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="container row justify-content-center align-items-center  gap-4 p-3 w-100">
        <h1 className="text-info "> Top Series</h1>

        {topseries.map((movie) => (
          <Card
            className="rounded p-0 "
            style={{ width: "18rem", border: "none" }}
            key={movie.id}
          >
            <Card.Img
              loading="lazy"
              variant="top"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            />
            <Card.Body className="bg bg-dark">
              {
                <Card.Title className="w-100">
                  <span className="text-info">TITLE:</span>{" "}
                  <span className="text-light">{movie.title}</span>
                </Card.Title>
              }
              {
                <CardText>
                  <div className="d-flex justify-content-between">
                    <div className="text-center mt-1">
                      {" "}
                      <span className="text-light"> Rate:</span>{" "}
                      <span className="text-info">{movie.vote_average}</span>
                    </div>{" "}
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={movie.vote_average / 2.0}
                      edit={false}
                    />
                  </div>
                </CardText>
              }
              <Link to={`/series/details/${movie.id}`}>
                {" "}
                <button type="button" className="btn btn-outline-info">
                  Details
                </button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
