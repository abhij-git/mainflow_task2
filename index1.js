import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={query}
        placeholder="Search for movies..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '10px' }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
