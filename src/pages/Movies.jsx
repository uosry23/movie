import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import { getAllMovies } from "../system/GetAllMoviesSlice";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AllDatails } from "../system/DetailsMoviesSlice";

const Movies = () => {
  const dispach = useDispatch();
  const param = useParams("");

  const { movies, load, error, pagnum } = useSelector(
    (state) => state.Allmovie
  );
  // console.log(movies);
  useEffect(() => {
    dispach(getAllMovies(pagnum));
  }, []);
  if (load) {
    return <Loading />;
  } else if (error) {
    return <ErrorPage />;
  } else {
    return (
      <div>
        <div className="bg bg-black d-flex flex-column align-items-center">
          <h1 className="text-light">
            Page <span className="text-info">{pagnum}</span> from{" "}
            <span className="text-info">500</span>
          </h1>
          <div className="container row justify-content-center align-items-center   gap-4 p-3">
            {movies.map((movie) => (
              <Card
                className="rounded p-0 "
                style={{ width: "18rem", border: "none" }}
                key={movie.id}
              >
                <Card.Img
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
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={movie.vote_average / 2.0}
                      edit={false}
                    />
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

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <button
                disabled={pagnum === 1}
                className="btn btn-primary"
                onClick={() => dispach(getAllMovies(1))}
              >
                {" "}
                <li className="page-item">{"<<"} </li>{" "}
              </button>
              <button
                disabled={pagnum === 1}
                className="btn btn-primary "
                onClick={() => dispach(getAllMovies(pagnum - 1))}
              >
                <li className="page-item">{"<"} </li>
              </button>
              <button className="btn btn-primary ">
                <li className="page-item">{pagnum}</li>
              </button>
              <button
                disabled={pagnum === 500}
                className="btn btn-primary"
                onClick={() => dispach(getAllMovies(pagnum + 1))}
              >
                <li className="page-item">{">"}</li>
              </button>
              <button
                disabled={pagnum === 500}
                className="btn btn-primary"
                onClick={() => dispach(getAllMovies(500))}
              >
                <li className="page-item">{">>"}</li>{" "}
              </button>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
};

export default Movies;
