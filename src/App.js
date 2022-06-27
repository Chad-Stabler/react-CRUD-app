import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Auth from './Auth';
import { useState } from 'react';
import { client } from './services/client';
import ListPage from './ListPage';
import Create from './Create';
import Update from './Update';
import { logOut } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(client.auth.user());

  async function logout() {
    await logOut();
    setUser('');
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">To list</Link>
            </li>
            <li>
              <Link to="/create">Add a movie</Link>
            </li>
            <li>
              <Link to="/movies/0">Update a movie</Link>
            </li>
            {
              user ? <li>
                <button onClick={logout}>Logout</button>
              </li> : <></>
            }
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {!user ? <Auth setUser={setUser} /> : <Redirect to="/movies" />}
          </Route>
          <Route exact path="/movies">
            {
              user ? <ListPage /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path='/create'>
            {
              user ? <Create /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/movies/:id">
            {
              user ? <Update /> : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
