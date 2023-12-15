import React from "react";
import "./review.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import { AllDatails } from "../system/DetailsMoviesSlice";
import { AiFillFileAdd, AiOutlineHome } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
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

const MoviesDetails = () => {
  const { load, error, detail } = useSelector((state) => state.DetalisMovies);
  const {
    castmovie,
    castProdected,
    castDircted,
    castActing,
    loadCast,

    errorCast,
  } = useSelector((state) => state.castMovies);
  const { keywords, loadkey, errorKey } = useSelector(
    (state) => state.keywords
  );
  const { reviw, loadofReview, errorofdReview } = useSelector(
    (state) => state.MovieReviw
  );
  const { vedios } = useSelector((state) => state.movieVedios);

  const dispatch = useDispatch();
  const { id } = useParams("");
  const showVideo = () => {
    Swal.fire({
      html: `<iframe width="100%" height="400" className='border-0 bg-dark ' src="https://www.youtube.com/embed/${vedios[0].key}"  ></iframe>`,
      showCancelButton: false,

      showConfirmButton: false,
      background: "black",
    });
  };
  useEffect(() => {
    dispatch(AllDatails(id));
    dispatch(getCastMovies(id));
    dispatch(getMovieReview(id));
    dispatch(getmoviekeywords(id));
    dispatch(getVedios(id));
    // console.log(castDircted);
    // console.log(castDircted);
  }, []);
  // console.log(keywords);
  // console.log(castmovie.cast);
  // console.log(detail);
  // console.log(reviw);
  if (load || loadCast || loadofReview) {
    return <Loading />;
  } else if (error || errorCast || errorofdReview) {
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
          <h1 className="text-info text-center p-5">movie - Details</h1>

          <div className="container row  justify-content-center  p-5">
            <div className="col-md-3 col-ms-12">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`}
                style={{ width: "15rem" }}
              />
            </div>
            <div className="flex-column align-items-center col-md-6 ms-12 container row">
              <span className="text-light fs-3 ">{detail.original_title}</span>
              <div className="text-light container row ">
                <div className=" col-md-9">
                  {detail.release_date}({detail.original_language}){"  "}
                  <FaHandPointRight className="text-warning" />
                  {detail.genres.map((i, index) => (
                    <span key={index}>{i.name} - </span>
                  ))}
                  {"  "}
                  <FaHandPointLeft className="text-warning" />
                </div>{" "}
                <span className="col-md-3~">1 h{detail.runtime % 60.0}min</span>
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

        <div className="container row justify-content-between">
          <span className="text-info fs-2 mt-2 mb-2">Top Billed Cast</span>

          <div className="flex-column w-75">
            <div
              className="col-md-6 col-ms-12 mt-3 d-flex  w-100  "
              style={{ minHeight: "30vh", overflow: "Overlay" }}
            >
              {castmovie.cast.map((movie) => (
                <Card
                  className="rounded p-0 ms-3 "
                  style={{ minWidth: "13rem", border: "none" }}
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
            {reviw.length === 0 ? (
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
              <div
                className="ms-3 bg bg-secondary d-flex justify-content-evenly flex-sm-row gap-3 gap-sm-3 container row  ms-2  "
                id="reviw"
              >
                <div className="ms-col-12 md-col-12">
                  <img
                    src={user}
                    style={{ maxWidth: "5rem", maxHeight: "5rem" }}
                    className="rounded mt-2 mb-2 ms-2   "
                  />
                </div>
                <div>
                  <div className="bg bg-secondary mt-5 ms-3 ">
                    <div className="flex-column ms-2 ms-col-12 md-col-12  col-sm-12 ">
                      <span className="fs-2 text-light">
                        A review by
                        <span className="text-info">
                          {reviw[0].author}
                        </span>{" "}
                      </span>
                      <span className="fs-5 text-light  container row ">
                        written by
                        <span className="text-info col-sm-12 ">
                          {reviw[0].author}{" "}
                          <span className="text-light">on</span>{" "}
                          {reviw[0].created_at}{" "}
                        </span>{" "}
                        <span
                          className="text-light"
                          style={{ display: "block" }}
                        >
                          <ShowMoreText
                            lines={3}
                            more="Show more"
                            less="Show less"
                            anchorClass="text-info pe-auto showmore"
                          >
                            {reviw[0].content}
                          </ShowMoreText>
                        </span>
                      </span>
                    </div>
                  </div>
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
              {vedios.map((movie, index) => (
                <iframe
                  width={900}
                  height={400}
                  src={`https://www.youtube.com/embed/${movie.key}`}
                  key={index}
                  className="ms-4 w-100"
                />
                //   <source src={`https://www.youtube.com/embed/${movie.key}`}/>
                // </video>
                // <Card
                //   className="rounded p-0 ms-3 "
                //   style={{ minWidth: "13rem", border: "none" }}
                //   key={index}
                // >
                //   <Card.Img
                //     loading="lazy"
                //     variant="top"
                //     src={
                //       movie.profile_path
                //         ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.profile_path}`
                //         : user
                //     }
                //   />
                //   <Card.Body className="h-50 bg bg-dark text-light">
                //     <Card.Text style={{ height: "2%" }}>
                //       <span className="fs-3 mb-2" style={{ display: "block" }}>
                //         {movie.name}
                //       </span>
                //       <span className="fs-5">{movie.character}</span>
                //     </Card.Text>
                //   </Card.Body>
                // </Card>
              ))}
            </div>
          </div>

          <div
            className="col-md-3 col-ms-12 mt-3"
            style={{ minHeight: "30vh" }}
          >
            <div className="flex-column container row ">
              <div className="d-flex container justify-content-between text-info col-sm-12 w-100">
                <BsFacebook className="fs-2" />
                <BsInstagram className="fs-2" />
                <BsTwitter className="fs-2" />
                <Link
                  to={`${detail.homepage} `}
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineHome className="fs-2" />
                </Link>
              </div>
              <div>
                <h3 className="mt-3 text-light"> statue :</h3>
                <h3 className="text-info mt-3">{detail.status}</h3>
              </div>
              <div>
                <h3 className="mt-3 text-light"> Original Language :</h3>
                <h3 className="text-info mt-3">{detail.original_language}</h3>
              </div>
              <div>
                <h3 className="mt-3 text-light"> Budget :</h3>
                <h3 className="text-info mt-3">{detail.budget}$</h3>
              </div>
              <div>
                <h3 className="mt-3 text-light">Revenue :</h3>
                <h3 className="text-info mt-3">{detail.revenue}$</h3>
              </div>
              <div className="w-100 container justify-content-evenly ">
                {keywords.map((key, index) => (
                  <span
                    key={index}
                    style={{ display: "inline" }}
                    className="keywords"
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
export default MoviesDetails;
