import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (<Link to={`/movies/${movie.id}`} >
    <p>{movie.Title} from {movie.director}</p>
  </Link>);
}