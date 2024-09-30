// src/components/Home.jsx
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Înlocuiește cu apelul tău API pentru a obține filmele pe care le vizionezi
    const fetchMovies = async () => {
      const response = await fetch('API_URL_FOR_CURRENT_MOVIES'); // Aici trebuie să înlocuiești cu URL-ul tău
      const data = await response.json();
      setMovies(data.results); // Asigură-te că structurezi corect datele
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Filmele pe care le vizionez acum</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li> // Aici afișezi titlul filmului
        ))}
      </ul>
    </div>
  );
};

export default Home;

