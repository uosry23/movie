import React, { lazy, useState } from "react";
import { getCastMovies } from "./../system/castMoviesSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Loading from "./LodiongPage";
import ErrorPage from "./ErrorPage";
import { FaRegUser } from "react-icons/fa";
import user from "../blue-user-icon-32.jpg";
import { AllDatails } from "./../system/DetailsMoviesSlice";
import { Link } from "react-router-dom";
const Castformovie = () => {
  const { id } = useParams("");

  const {
    castmovie,
    loadCast,
    errorCast,
    castArt,
    castSound,
    castCamera,
    castVisual_Effects,
    castCostume_Make_Up,
    castActing,
    castProdected,
    castDircted,
    castwriting,
  } = useSelector((state) => state.castMovies);
  const { load, error, detail } = useSelector((state) => state.DetalisMovies);

  const dispatch = useDispatch("");
  useEffect(() => {
    dispatch(getCastMovies(id));
    dispatch(AllDatails(id));
    // console.log(detail);
    // console.log(castmovie);
  }, []);

  //   console.log(castmovie);
  if (loadCast || load) return <Loading />;
  else if (errorCast || error) return <ErrorPage />;
  else {
    return (
      <div className="container  row justify-content-between w-100  ">
        <div
          className="w-100 bg-dark mt-3 flex-column   "
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
        <div className="col-md-6 col-sm-12 col-lg-6 mt-5 w-50  ">
          <span className="text-light fs-1">
            Cast :<span className="text-info">{castmovie.cast.length}</span>
          </span>
          {castmovie.cast.map((movie) => (
            <Card
              className="rounded p-0 ms-3 mb-3 "
              style={{ border: "none", minWidth: "5rem", maxWidth: "20rem" }}
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
                <Card.Text>
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary  "
                    style={{ display: "block " }}
                  >
                    {movie.character}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 mt-5 w-50 flex-column  ">
          <span className="fs-1 text-light">
            crew : <span className="text-info">{castmovie.crew.length}</span>
          </span>
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            Art{" "}
          </span>
          {castArt.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            camera{" "}
          </span>
          {castCamera.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            sound{" "}
          </span>
          {castSound.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            Visual_Effects{" "}
          </span>
          {castVisual_Effects.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}{" "}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            Costume_Make_Up{" "}
          </span>
          {castCostume_Make_Up.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            acting{" "}
          </span>
          {castActing.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            producting{" "}
          </span>
          {castProdected.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            writing{" "}
          </span>
          {castwriting.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <span
            className="text-info fs-1 mb-3 mt-3"
            style={{ display: "block" }}
          >
            Directing{" "}
          </span>
          {castDircted.map((movie, index) => (
            <Card
              loading="lazy"
              className="rounded p-0 ms-3 mb-3  justify-content-evenly  "
              style={{ minWidth: "10rem", border: "none", maxWidth: "20rem" }}
              key={index}
            >
              <Card.Img
                alt={<FaRegUser />}
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
                  <span className="fs-3">{movie.name}</span>
                  <span
                    className="text-secondary "
                    style={{ display: "block " }}
                  >
                    {movie.known_for_department}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
};

export default Castformovie;
