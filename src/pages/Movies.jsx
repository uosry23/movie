import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import { getAllMovies } from "../system/GetAllMoviesSlice";
import { useParams } from "react-router-dom";
import MovieCard from "../component/MovieCard";
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import "../styles/Pages.css";

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
      <div className="page-container">
        <Container>
          <div className="page-header">
            <h1 className="page-title">Movies</h1>
            <div className="page-subtitle">
              Discover the latest and greatest films from around the world
            </div>
          </div>

          <div className="page-info">
            <div className="page-counter">
              Page <span className="page-counter-current">{pagnum}</span> of <span className="page-counter-total">500</span>
            </div>
          </div>

          <Row className="g-4">
            {movies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} type="movie" />
              </Col>
            ))}
          </Row>

          <div className="pagination-container">
            <div className="pagination-controls">
              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagnum === 1}
                onClick={() => dispach(getAllMovies(1))}
              >
                <FaAngleDoubleLeft />
              </Button>

              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagnum === 1}
                onClick={() => dispach(getAllMovies(pagnum - 1))}
              >
                <FaChevronLeft />
              </Button>

              <div className="pagination-current">{pagnum}</div>

              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagnum === 500}
                onClick={() => dispach(getAllMovies(pagnum + 1))}
              >
                <FaChevronRight />
              </Button>

              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagnum === 500}
                onClick={() => dispach(getAllMovies(500))}
              >
                <FaAngleDoubleRight />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default Movies;
