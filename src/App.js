import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import { Routes, Route } from 'react-router-dom';

const initialMovies = [
  { id: 1, title: 'Inception', trailer: 'https://www.youtube.com/embed?listType=search&list=Inception+trailer', description: 'Un voleur infiltre les rêves pour y implanter une idée.', posterURL: '/poster.svg', rating: 5 },
  { id: 2, title: 'Interstellar', trailer: 'https://www.youtube.com/embed?listType=search&list=Interstellar+trailer', description: "Des explorateurs traversent un trou de ver pour sauver l'humanité.", posterURL: '/poster.svg', rating: 5 },
  { id: 3, title: 'La La Land', trailer: 'https://www.youtube.com/embed?listType=search&list=La+La+Land+trailer', description: 'Un pianiste et une actrice poursuivent leurs rêves à Los Angeles.', posterURL: '/poster.svg', rating: 4 },
  { id: 4, title: 'Breaking Bad', trailer: 'https://www.youtube.com/embed?listType=search&list=Breaking+Bad+trailer', description: 'Un professeur de chimie bascule dans le crime.', posterURL: '/poster.svg', rating: 5 },
  { id: 5, title: 'The Office', trailer: 'https://www.youtube.com/embed?listType=search&list=The+Office+US+trailer', description: "Le quotidien absurde des employés d'un bureau.", posterURL: '/poster.svg', rating: 3 },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => setMovies([...movies, { ...movie, id: Date.now() }]);

  const filtered = movies.filter(
    (m) => m.title.toLowerCase().includes(titleFilter.toLowerCase()) && m.rating >= ratingFilter
  );

  return (
    <div className="app">
      <h1>🎬 Mes films et séries</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                title={titleFilter}
                rating={ratingFilter}
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <AddMovie onAdd={addMovie} />
              <MovieList movies={filtered} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
