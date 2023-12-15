import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetAllSeries } from "./../system/GetAllSeriesSlice";
import ReactStars from "react-rating-stars-component";

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
    <ErrorPage />;
  } else {
    return (
      <div className="bg-bldck">
        <div className="bg bg-black d-flex flex-column align-items-center">
          <h1 className="text-light">
            Page <span className="text-info">{pagenum}</span> from{" "}
            <span className="text-info">500</span>
          </h1>
          <div className="container row justify-content-center align-items-center  gap-4 p-3">
            {series.map((serie) => (
              <Card
                className="rounded p-0 "
                style={{ width: "18rem", border: "none" }}
                key={serie.id}
              >
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${serie.poster_path}`}
                />
                <Card.Body className="bg bg-dark">
                  <Card.Title className="w-100">
                    <span className="text-info">TITLE:</span>{" "}
                    <span className="text-light">{serie.name}</span>
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <div className="text-center mt-1">
                      {" "}
                      <span className="text-light"> Rate:</span>{" "}
                      <span className="text-info">{serie.vote_average}</span>
                    </div>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={serie.vote_average / 2}
                      edit={false}
                    />
                  </div>
                  <Link to={`/series/details/${serie.id}`}>
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
                disabled={pagenum === 1}
                className="btn btn-primary"
                onClick={() => dispatch(GetAllSeries(1))}
              >
                {" "}
                <li className="page-item">{"<<"} </li>{" "}
              </button>
              <button
                disabled={pagenum === 1}
                className="btn btn-primary "
                onClick={() => dispatch(GetAllSeries(pagenum - 1))}
              >
                <li className="page-item">{"<"} </li>
              </button>
              <button className="btn btn-primary ">
                <li className="page-item">{pagenum}</li>
              </button>
              <button
                disabled={pagenum === 500}
                className="btn btn-primary"
                onClick={() => dispatch(GetAllSeries(pagenum + 1))}
              >
                <li className="page-item">{">"}</li>
              </button>
              <button
                disabled={pagenum === 500}
                className="btn btn-primary"
                onClick={() => dispatch(GetAllSeries(500))}
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

export default Series;
