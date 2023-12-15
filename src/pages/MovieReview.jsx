import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieReview } from "./../system/reviewMoviesSlice";
import { AllDatails } from "./../system/DetailsMoviesSlice";
import { Link } from "react-router-dom";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import ShowMoreText from "react-show-more-text";
const MovieReview = () => {
  const { id } = useParams("");
  const { reviw, loadofReview, errorofdReview } = useSelector(
    (state) => state.MovieReviw
  );
  const { load, error, detail } = useSelector((state) => state.DetalisMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieReview(id));
    dispatch(AllDatails(id));

    // console.log(reviw);
  }, []);

  if (loadofReview || load) {
    return <Loading />;
  } else if (error || errorofdReview) {
    return <ErrorPage />;
  } else {
    return (
      <div
        className="container  row w-100 justify-content-center flex-column align-items-center  "
        style={{ width: "100vh" }}
      >
        <div
          className="w-100 bg-dark  flex-column mt-2"
          style={{ minHeight: "15rem" }}
        >
          <img
            style={{ minHeight: "2rem", maxHeight: "10rem" }}
            className="p-2"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${detail.backdrop_path}`}
          />{" "}
          <span className="fs-3 text accordion text-light">
            {detail.original_title}
            <span className="text-secondary ">({detail.release_date})</span>
          </span>
          <Link
            className="text-decoration-none"
            style={{ direction: "none", display: "block" }}
            to={`/movies/details/${id}`}
          >
            <span className="text-secondary  "> {"<--"}go to main</span>
          </Link>
        </div>
        {reviw.map((reviw, index) => (
          <div className="bg bg-secondary mt-5 ms-3 " key={index}>
            <div className="flex-column ms-2 ms-col-12 md-col-12  col-sm-12 ">
              <span className="fs-2 text-light">
                A review by
                <span className="text-info">{reviw.author}</span>{" "}
              </span>
              <span className="fs-5 text-light  container row ">
                written by
                <span className="text-info col-sm-12 ">
                  {reviw.author} <span className="text-light">on</span>{" "}
                  {reviw.created_at}{" "}
                </span>{" "}
                <span className="text-light" style={{ display: "block" }}>
                  <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    anchorClass="text-info pe-auto showmore"
                  >
                    {reviw.content}
                  </ShowMoreText>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default MovieReview;
