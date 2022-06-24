import React from './react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Auth from './Auth';
import { useState } from 'react';
import { client } from './services/client';

function App() {
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              !user ? <Auth /> : <Redirect to='/movies' />
            }
          </Route>
          <Route >
            {/* do later */}
          </Route>
          <Route exact path="/movies">
            {/* do later */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
