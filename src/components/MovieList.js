import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) return <p className="empty">Aucun film ne correspond au filtre.</p>;

  return (
    <div className="list">
      {movies.map(({ id, ...movie }) => (
        <MovieCard key={id} id={id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
