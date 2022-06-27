import { useState } from 'react';
import { createMovie } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const { push } = useHistory();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const movie = { title: title, director: director, release_date: releaseDate };

    await createMovie(movie);

    setDirector('');
    setTitle('');
    setReleaseDate('');

    push('/movies');
  }

  return (<div>
    <h2>Movie Details</h2>
    <form onSubmit={handleSubmit}>
      <label>
            Title:
        <input value={title} onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        Director:
        <input value={director} onChange={e => setDirector(e.target.value)} />
      </label>
      <label>
        Release Date:
        <input value={releaseDate} onChange={e => setReleaseDate(e.target.value)} />
      </label>
      <button>Add movie</button>
    </form>
  </div>);
}