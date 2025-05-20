import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import { GetAllSeries } from "./../system/GetAllSeriesSlice";
import MovieCard from "../component/MovieCard";
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import "../styles/Pages.css";

const Series = () => {
  const { load, series, error, pagenum } = useSelector(
    (state) => state.AllSeries
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllSeries(pagenum));
    // console.log(series);
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
            <h1 className="page-title">TV Series</h1>
            <div className="page-subtitle">
              Explore popular TV shows and series from around the world
            </div>
          </div>

          <div className="page-info">
            <div className="page-counter">
              Page <span className="page-counter-current">{pagenum}</span> of <span className="page-counter-total">500</span>
            </div>
          </div>

          <Row className="g-4">
            {series.map((serie) => (
              <Col key={serie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={serie} type="series" />
              </Col>
            ))}
          </Row>

          <div className="pagination-container">
            <div className="pagination-controls">
              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagenum === 1}
                onClick={() => dispatch(GetAllSeries(1))}
              >
                <FaAngleDoubleLeft />
              </Button>

              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagenum === 1}
                onClick={() => dispatch(GetAllSeries(pagenum - 1))}
              >
                <FaChevronLeft />
              </Button>

              <div className="pagination-current">{pagenum}</div>

              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagenum === 500}
                onClick={() => dispatch(GetAllSeries(pagenum + 1))}
              >
                <FaChevronRight />
              </Button>

              <Button
                variant="primary"
                className="pagination-btn"
                disabled={pagenum === 500}
                onClick={() => dispatch(GetAllSeries(500))}
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

export default Series;
