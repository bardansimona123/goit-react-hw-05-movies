// src/components/Movies.jsx
import React, { useState } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`API_URL_FOR_SEARCH_MOVIES?query=${query}`); // Aici trebuie să înlocuiești cu URL-ul tău
    const data = await response.json();
    setSearchResults(data.results); // Asigură-te că structurezi corect datele
  };

  return (
    <div>
      <h1>Caută Filme</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Caută un film"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li> // Aici afișezi titlul filmului
        ))}
      </ul>
    </div>
  );
};

export default Movies;
