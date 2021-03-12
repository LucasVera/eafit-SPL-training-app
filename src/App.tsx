import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import AuthenticatedHome from './containers/AuthenticatedHome';

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/authenticated-home" component={AuthenticatedHome} />
      </Router>
    </Fragment>
  );
}

export default App;
