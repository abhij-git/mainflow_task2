import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error('Error fetching movie details:', err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
