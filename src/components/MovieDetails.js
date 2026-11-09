import { Link, useParams } from 'react-router-dom';

// Page de description + bande-annonce d'un film
function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return (
      <div className="details">
        <Link to="/" className="back">← Accueil</Link>
        <p>Film introuvable.</p>
      </div>
    );
  }

  return (
    <div className="details">
      <Link to="/" className="back">← Retour à l'accueil</Link>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {movie.trailer ? (
        <iframe src={movie.trailer} title={`Bande-annonce ${movie.title}`} allowFullScreen />
      ) : (
        <p>Aucune bande-annonce disponible.</p>
      )}
    </div>
  );
}

export default MovieDetails;
