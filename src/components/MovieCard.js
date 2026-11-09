import { Link } from 'react-router-dom';

function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${id}`} className="card">
      <img src={posterURL || '/poster.svg'} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="stars">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
      </div>
    </Link>
  );
}

export default MovieCard;
