import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import MovieDetails from './pages/MovieDetails';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          console.error('Invalid API response:', data);
          setMovies([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
        setMovies([]);
      });
  };

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  }, []);

  const handleSearch = (query) => {
    if (query === '') {
      fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    } else {
      fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '20px' }}>
              <h1>🎬 Movie Explorer</h1>
              <SearchBar onSearch={handleSearch} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                ) : (
                  <p>No movies found.</p>
                )}
              </div>
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
