import React from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopMoviesData } from "../system/NowPlayingMoviesSlice";
import Loading from "./LodiongPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import { BiFullscreen } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TopSeriesData } from "../system/NowPlayingSeriesSlice";
import { CardText } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { TopSeries20Data } from "../system/getSeries";
import { TopMovies20Data } from "./../system/getTopMovies";
import { CardsHome } from "./CardsHome";

const Home = () => {
  const { movies, load, error } = useSelector(
    (state) => state.nowPlayingMOvies
  );
  const { series } = useSelector((state) => state.nowPlayingSeries);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TopMoviesData());
    dispatch(TopSeriesData());
    // console.log(series);
    // console.log(movies);
  }, []);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  // console.log(movies);

  if (load) {
    return <Loading />;
  } else {
    return (
      <div className="bg-black container ">
        {" "}
        <div className=" bg-black p-5 ">
          <h1 className="text-info mb-4">Movies</h1>
          <Slider
            {...settings}

            // className=" container row justify-content-center align-items-center w-100"
          >
            {movies.map((movie, index) => (
              <Link to={`/movies/details/${movie.id}`} key={index}>
                {" "}
                <div className="card bg-black ">
                  <Card
                    className="rounded p-0  "
                    style={{ width: "18rem", border: "none" }}
                    key={movie.id}
                  >
                    <Card.Img
                      loading="lazy"
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                    />
                  </Card>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        <div className="bg-black p-5">
          <h1 className="text-info mb-4">Series</h1>

          <Slider {...settings}>
            {series.map((serie, index) => (
              <Link to={`/series/details/${serie.id}`} key={index}>
                {" "}
                <div className="card bg-black ">
                  <Card
                    className="rounded p-0 "
                    style={{ width: "18rem", border: "none" }}
                    key={serie.id}
                  >
                    <Card.Img
                      loading="lazy"
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${serie.poster_path}`}
                    />
                  </Card>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        <CardsHome />
      </div>
    );
  }
};

export default Home;
