import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  ReactGA.initialize('UA-169309883-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <React.StrictMode>
    <meta name="ui-version" content="%REACT_APP_GIT_SHA%" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
