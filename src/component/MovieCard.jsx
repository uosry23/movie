import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaPlay, FaHeart, FaInfoCircle } from 'react-icons/fa';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, type = 'movie' }) => {
  const navigate = useNavigate();
  const imageUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  const detailsPath = type === 'movie'
    ? `/movies/details/${movie.id}`
    : `/series/details/${movie.id}`;

  // Format the release date to just show the year
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : movie.first_air_date
      ? new Date(movie.first_air_date).getFullYear()
      : '';

  // Calculate rating out of 5 stars (API provides rating out of 10)
  const rating = movie.vote_average ? (movie.vote_average / 2).toFixed(1) : 'N/A';

  // Handle click on the entire card
  const handleCardClick = () => {
    navigate(detailsPath);
  };

  // Handle action button clicks without triggering card navigation
  const handleActionClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the card
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <div className="movie-card-img">
        <img src={imageUrl} alt={movie.title || movie.name} />
        <div className="movie-card-overlay">
          <div className="movie-card-actions" onClick={handleActionClick}>
            <button className="movie-card-action-btn">
              <FaPlay />
            </button>
            <button className="movie-card-action-btn">
              <FaHeart />
            </button>
            <button className="movie-card-action-btn">
              <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>

      {movie.vote_average > 8 && (
        <div className="movie-card-badge">Top Rated</div>
      )}

      <div className="movie-card-body">
        <h3 className="movie-card-title">{movie.title || movie.name}</h3>

        <div className="movie-card-info">
          <div className="movie-card-rating">
            <FaStar className="movie-card-rating-icon" />
            <span>{rating}</span>
          </div>
          <div className="movie-card-year">{releaseYear}</div>
        </div>

        <p className="movie-card-description">
          {movie.overview || 'No description available.'}
        </p>

        <div className="movie-card-footer">
          <button className="movie-card-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
