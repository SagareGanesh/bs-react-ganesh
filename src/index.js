import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Loader from './components/Loader/Loader.jsx';
const App = lazy(() => import('./components/App/App.jsx'));

ReactDOM.render(
  <Suspense fallback={ <Loader /> }>
    <App />
  </Suspense>,
  document.getElementById('react-app-root')
);