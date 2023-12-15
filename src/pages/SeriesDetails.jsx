import React from "react";
import "./review.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import { AllDatails } from "../system/DetailsMoviesSlice";
import { AiFillFileAdd, AiOutlineHome } from "react-icons/ai";
import { FaStar, FaYoutube } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { getCastMovies } from "./../system/castMoviesSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import user from "../blue-user-icon-32.jpg";
import { getMovieReview } from "./../system/reviewMoviesSlice";
import ShowMoreText from "react-show-more-text";
import { getmoviekeywords } from "./../system/keywordsformovies";
import Swal from "sweetalert2";
import { getVedios } from "./../system/movievedios";
import { AllSeriesDatails } from "./../system/GetallSeriesDetails";
import { getCastSeries } from "./../system/castofseries";
import { getseriesvideo } from "./../system/seriesvedios";
import { get_reco_Series } from "./../system/recomonadationSeriesSlice";
import { getserieskewords } from "./../system/keywordsForSeries";

const SeriesDetails = () => {
  const { load, error, detail } = useSelector((state) => state.DetalisSeries);
  const {
    castmovie,
    castProdected,
    castDircted,
    castActing,
    loadCast,
    errorCast,
  } = useSelector((state) => state.castSeries);
  const { keywords, loadkey, errorKey } = useSelector(
    (state) => state.serieskeys
  );

  const { vedios } = useSelector((state) => state.seriesvideo);
  const { recomandation_Series, recomandation_Load, recomandation_Error } =
    useSelector((state) => state.Reco_Series);
  const dispatch = useDispatch();
  const { id } = useParams("");
  const showVideo = () => {
    if (vedios.length > 0) {
      Swal.fire({
        html: `<iframe width="100%" height="400" className='border-0 bg-dark ' src="https://www.youtube.com/embed/${vedios[0].key}"  ></iframe>`,
        showCancelButton: false,

        showConfirmButton: false,
        background: "black",
      });
    } else {
      Swal.fire({
        html: `we dont't have any trailer yet`,
        showCancelButton: false,

        showConfirmButton: false,
        background: "white",
      });
    }
  };
  useEffect(() => {
    dispatch(AllSeriesDatails(id));
    dispatch(getCastSeries(id));
    // dispatch(getMovieReview(id));
    dispatch(getserieskewords(id));
    dispatch(getseriesvideo(id));
    dispatch(get_reco_Series(id));
    // console.log(detail);
    // console.log(castDircted);
    // console.log(recomandation_Series);
  }, []);

  if (load || loadCast || recomandation_Load || loadkey) {
    return <Loading />;
  } else if (error || errorCast || recomandation_Error || errorKey) {
    return <ErrorPage />;
  } else {
    return (
      <div className="bg bg-black">
        <div
          style={{
            backgroundImage: `URL(https://image.tmdb.org/t/p/w600_and_h900_bestv2${detail.backdrop_path}`,
            minHeight: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="bg bg-dark"
        >
          <h1 className="text-info text-center p-5">Series- Details</h1>

          <div className="container row  justify-content-center  p-5">
            <div className="col-md-3 col-ms-12">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                style={{ width: "15rem" }}
              />
            </div>
            <div className="flex-column align-items-center col-md-6 ms-12 container row">
              <span className="text-light fs-3 ">{detail.original_name}</span>
              <div className="text-light container row ">
                <div className=" col-md-9">
                  {detail.first_air_date}({detail.original_language}){"  "}
                  <FaHandPointRight className="text-warning" />
                  {detail.genres.map((i, index) => (
                    <span key={index}>{i.name} - </span>
                  ))}
                  {"  "}
                  <FaHandPointLeft className="text-warning" />
                </div>{" "}
              </div>
              <span className=" text-light">
                <h1 className="text-info">OverView :</h1>
                {detail.overview}{" "}
              </span>
              <div className="flex-column justify-content-center container row  ">
                <h1 className="text-info"> Casting: </h1>
                <div className="d-flex w-100 justify-content-between text-light mt-4  ">
                  <div className=" text-light col-md-2  ">
                    {castActing.length > 0 && (
                      <span>{castActing[0].original_name}</span>
                    )}{" "}
                    <h6 className="text-warning">Acting</h6>
                  </div>
                  {" ||"}
                  <div className="text-light ">
                    {castActing.length > 1 && (
                      <span>{castActing[1].original_name}</span>
                    )}
                    <h6 className="text-warning">Acting</h6>
                  </div>
                </div>
                <div className="d-flex w-100 justify-content-between text-light mt-4 container row">
                  <div className="col-ms-12 col-md-3">
                    {castProdected.length > 0 && (
                      <span>{castProdected[0].original_name}</span>
                    )}{" "}
                    <h6 className="text-warning">Production</h6>
                  </div>
                  {" ||"}
                  <div className="col-ms-12 col-md-3">
                    {castDircted.length > 10 && (
                      <span>{castDircted[0].original_name}</span>
                    )}{" "}
                    <h6 className="text-warning">Directing</h6>
                  </div>{" "}
                  {" ||"}
                  <div className="col-ms-12 col-md-3">
                    {castProdected.length > 1 && (
                      <span>{castProdected[1].original_name}</span>
                    )}
                    <h6 className="text-warning">Production</h6>
                  </div>
                </div>
                <div className="d-flex w-100 justify-content-between text-light mt-4 container row ">
                  <div className="col-ms-12 col-md-4 col-lg-4">
                    <AiFillFileAdd className="text-success fs-2  mt-3" />
                    <h5> add watchList</h5>
                    {"    "}
                  </div>
                  <div className=" col-ms-12 col-md-4 col-lg-4">
                    <AiOutlineStar className="text-warning fs-2  mt-3" />{" "}
                    <h5> Rate Movie</h5>
                  </div>
                  {"     "}
                  <div className="col-ms-12 col-md-4 col-lg-4">
                    <Link
                      style={{ textDecoration: "none" }}
                      onClick={() => showVideo()}
                    >
                      <FaYoutube className="text-danger fs-2" />
                      <h5 className="text-light"> Play Trailer</h5>
                    </Link>
                  </div>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                  {" "}
                  <Link to={"/movies"}>
                    <button type="button" className="btn btn-outline-info">
                      back step
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container justify-content-center  row ">
          <span className="text-info fs-2 mt-2 mb-2">Top Billed Cast</span>

          <div className="flex-column w-75">
            <div
              className="col-md-6 col-ms-12 mt-3 d-flex  w-100  "
              style={{ minHeight: "30vh", overflow: "Overlay" }}
            >
              {castmovie.cast.map((movie) => (
                <Card
                  className="rounded p-0 ms-3 "
                  style={{
                    minWidth: "13rem",
                    maxWidth: "14rem",
                    border: "none",
                  }}
                  key={movie.id}
                >
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    src={
                      movie.profile_path
                        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.profile_path}`
                        : user
                    }
                  />
                  <Card.Body className="h-50 bg bg-dark text-light">
                    <Card.Text style={{ height: "2%" }}>
                      <span className="fs-3 mb-2" style={{ display: "block" }}>
                        {movie.name}
                      </span>
                      <span className="fs-5">{movie.character}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
              <Link
                to={`/movies/details/${id}/cast`}
                className="fs-3 text-decoration-none   "
              >
                <Button
                  className="bg-secondary ms-3"
                  style={{ minWidth: "13rem", minHeight: "100%" }}
                >
                  {" "}
                  More{"--> "}
                </Button>
              </Link>
            </div>
            <Link
              className="fs-3 text-decoration-none"
              to={`/movies/details/${id}/cast`}
            >
              <span className="text-info"> full cast & crew</span>
            </Link>{" "}
            {detail.seasons.length === 0 ? (
              <div
                className=" ms-3 bg bg-secondary d-flex justify-content-evenly flex-sm-row gap-3 gap-sm-3 container row text-center mb-3   "
                id="reviw"
                style={{ minHeight: "3rem" }}
              >
                <span className="fs-5">
                  We don't have any reviews for{" "}
                  <span className="text-info"> {detail.original_title}</span>
                </span>
              </div>
            ) : (
              <div>
                {" "}
                <span className="fs-2 text-warning  p-5 mb-5">Last season</span>
                <div className="   bg bg-dark container   ">
                  {detail.seasons.length > 0 ? (
                    <div className=" p-2 d   col-sm-12 row ">
                      <div
                        className="col-md-3 "
                        style={{
                          flex: "1",
                        }}
                      >
                        <img
                          style={{
                            width: "15rem",
                            height: "25rem",
                            display: "inline",
                          }}
                          src={
                            detail.seasons[detail.seasons.length - 1]
                              .poster_path ? (
                              ` https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                                detail.seasons[detail.seasons.length - 1]
                                  .poster_path
                              }`
                            ) : (
                              <span className="fs-3">
                                There are no previous seasons
                              </span>
                            )
                          }
                          className="rounded mt-2 w-100 mb-3 "
                        />
                      </div>

                      <div
                        className="ms-3 col-md-6 flex-column fs-4 text-light container  "
                        style={{ display: "flex", flexWrap: "wrap" }}
                      >
                        <div className="d-flex justify-content-between row   ">
                          <span className="col-md-4 mt-3">
                            {detail.seasons[detail.seasons.length - 1].name}
                          </span>
                          <span className=" rounded col-md-4  mt-3  text-light fs-8 d-flex ">
                            {detail.vote_average}{" "}
                            <FaStar className="mt-1 ms-1  " color="gold" />
                          </span>
                          <span className="col-md-4 mt-3">
                            {detail.seasons[detail.seasons.length - 1].air_date}
                          </span>
                        </div>
                        <div className="mt-3">
                          {" "}
                          {detail.seasons[detail.seasons.length - 1]
                            .overview ? (
                            <span>
                              {" "}
                              {
                                detail.seasons[detail.seasons.length - 1]
                                  .overview
                              }
                            </span>
                          ) : (
                            <span className="text-info mt-3">
                              {" "}
                              There are no reviews yet{" "}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span className="fs-3">There are no previous seasons</span>
                  )}
                </div>
                <Link to={`/movies/details/${id}/review`}>
                  <span className="text-info">show all review</span>
                </Link>
              </div>
            )}
            <span className="fs-2 text-info mt-5 ms-3 ">Media</span>
            <span
              className="fs-5 text-danger-emphasis mt-2 ms-3 "
              style={{ display: "block" }}
            >
              VIDEOS({vedios.length})
            </span>
            <div
              className="col-md-6 col-ms-12 mt-3 d-flex  w-100  mt-5 ms-3   "
              style={{ minHeight: "30vh", overflow: "Overlay" }}
            >
              {vedios.length > 0 &&
                vedios.map((movie, index) => (
                  <iframe
                    width={900}
                    height={400}
                    src={`https://www.youtube.com/embed/${movie.key}`}
                    key={index}
                    className="ms-4 w-100"
                  />
                ))}
            </div>
            <span className="fs-2 text-info mt-3">Recomendation</span>
            <div>
              <div
                className="col-md-6 col-ms-12 mt-3 d-flex  w-100  "
                style={{ minHeight: "30vh", overflow: "Overlay" }}
              >
                {recomandation_Series.map((Reco) => (
                  <Link
                    key={Reco.id}
                    to={`/series/details/${Reco.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      {" "}
                      <Card
                        className="rounded p-0 ms-3  "
                        style={{
                          minWidth: "17rem",
                          maxWidth: "25rem",
                          border: "none",
                          textDecoration: "none",
                        }}
                      >
                        <Card.Img
                          loading="lazy"
                          variant="top"
                          src={
                            Reco.backdrop_path
                              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${Reco.backdrop_path}`
                              : user
                          }
                        />
                        <Card.Body className="h-50 bg bg-dark text-light">
                          <Card.Text
                            style={{ height: "2%" }}
                            className="d-flex justify-content-between text-decoration-none  "
                          >
                            <span
                              className="fs-3 mb-2"
                              style={{ display: "block" }}
                            >
                              {Reco.name}
                            </span>
                            <span className="mt-2 text-info">
                              {(Reco.vote_average * 10).toFixed(0)}
                              {"%"}
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-ms-12 mt-3"
            style={{ minHeight: "30vh" }}
          >
            <div className="flex-column container row ">
              <div className="d-flex container justify-content-between text-info col-sm-12 w-100">
                <Link
                  to={`${detail.homepage} `}
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineHome className="fs-2" />
                </Link>
              </div>
              <div className="mt-3 mb-3">
                <span
                  className="mt-3 text-light fs-4"
                  style={{ display: "block" }}
                >
                  {" "}
                  original Name :
                </span>
                <span className="text-info mt-3 fs-4">
                  {detail.original_name}
                </span>
              </div>
              <div className="mt-3 mb-3">
                <span
                  className="mt-3 text-light fs-4"
                  style={{ display: "block" }}
                >
                  {" "}
                  statue :
                </span>
                <span className="text-info mt-3 fs-4">{detail.status}</span>
              </div>
              <div className="mt-3 mb-3">
                <span
                  className="mt-3 text-light fs-4"
                  style={{ display: "block" }}
                >
                  {" "}
                  Original Language :
                </span>
                <span className="text-info mt-3 fs-4">
                  {detail.original_language}
                </span>
              </div>
              <div className="mt-3 mb-3">
                <span
                  className="mt-3 text-light fs-4"
                  style={{ display: "block" }}
                >
                  {" "}
                  Network :
                </span>
                <span className="text-info mt-3 fs-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${detail.networks[0].logo_path}`}
                    width={100}
                    height={50}
                  />
                </span>
              </div>
              <div className="mt-3 mb-3">
                <span
                  className="mt-3 text-light fs-4 "
                  style={{ display: "block" }}
                >
                  type :
                </span>
                <span className="text-info mt-3 fs-4">{detail.type}</span>
              </div>
              <span className="fs-4 text-info mb-3">Keywords</span>

              <div className="w-100 row  gap-3  ">
                {keywords.map((key, index) => (
                  <span
                    key={index}
                    style={{ display: "inline" }}
                    className="keywords col-lg-5 col-sm-4 "
                  >
                    {" "}
                    {key.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default SeriesDetails;
