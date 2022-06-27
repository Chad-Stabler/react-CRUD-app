import { useEffect, useState } from 'react';
import { deleteMovie, getMovieByID, updateMovie } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function Update() {
  const { push } = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    async function fetch() {
      const movie = await getMovieByID(id);

      setDirector(movie.director);
      setTitle(movie.Title);
      setReleaseDate(movie.release_date);
    }

    fetch();
  }, [id]);

  async function handleDelete() {
    await deleteMovie(id);

    push('/movies');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await updateMovie({ Title: title, director: director, release_date: releaseDate }, id);

    setDirector('');
    setTitle('');
    setReleaseDate('');

    push('/movies');
  }

  return (<div>
    <h2>Details</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input value={title} onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        Director:
        <input value={director} onChange={e => setDirector(e.target.value)}/>
      </label>
      <label>
        Release Date:
        <input value={releaseDate} onChange={e => setReleaseDate(e.target.value)}/>
      </label>
      <button>Update movie</button>
    </form>
    <button onClick={handleDelete} className='deleteBtn'>Delete movie</button>
  </div>);
}