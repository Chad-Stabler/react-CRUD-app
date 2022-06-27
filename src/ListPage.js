import { useEffect, useState } from 'react';
import { getMovies } from './services/fetch-utils';
import Movie from './Movie';

export default function ListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      const movieArr = await getMovies();

      setMovies(movieArr);
    }
    fetch();
  }, []);

  return (<div className='movies'>
    {
      movies.map((movie, i) => <Movie key={movie.Title + movie.director + i} movie={movie} />)
    }
  </div>);
}