import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { 
BrowserRouter as Router,
Routes,
Route,
Navigate,
Link 
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/myapps" element={<Navigate replace to="/learn" /> } />
      <Route path="/learn" element={<Learn /> } />
    </Routes>
  </Router>
);

function Home() {
return (
  <div>
    <h1>Home Router</h1>
  </div>
);
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses are Listed Here </h4>
      <Link to="/learn/course">Courses</Link>
      <Link to="/learn/bundle">Bundles</Link>
    </div>
  );
}

reportWebVitals();