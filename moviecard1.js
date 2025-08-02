import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', width: '200px' }}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%' }}
      />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
