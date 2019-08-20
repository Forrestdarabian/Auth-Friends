import React from 'react';
import Login from './Login';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li> */}
      </ul>
      {/* <Route path="/public" component={Public} /> */}
      <Route path="/login" component={Login} />
      {/* <PrivateRoute path='/protected' component={Protected} /> */}

    </div>
  );
}

export default App;
