import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Auth from './Auth';
import { useState } from 'react';
import { client } from './services/client';
import ListPage from './ListPage';

export default function App() {
  const [user, setUser] = useState(client.auth.user());
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
              <Link to=""></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {!user ? <Auth setUser={setUser} /> : <Redirect to="/movies" />}
          </Route>
          <Route>{/* do later */}</Route>
          <Route exact path="/movies">
            {
              user ? <ListPage /> : <Redirect to="/" />
            }
            {/* do later */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
