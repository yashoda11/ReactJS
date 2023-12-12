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
Link,
Outlet,
useParams, 
NavLink,
useNavigate,
useLocation
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/myapps" element={<Navigate replace to="/learn" /> } />
      <Route path="learn" element={<Learn /> }>
        <Route path="course" element={<Courses />}>
          <Route path=":courseid" element={<CourseID />} />
        </Route> 
        <Route path="bundle" element={<Bundles />} /> 
      </Route>
      <Route path='dashboard' element={<Dashboard /> } />
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
      <Link className='btn btn-success' to="/learn/course">
        Courses
      </Link>
      |<Link className='btn btn-primary' to="/learn/bundle">
        Bundles
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", 'Vue', 'NodeJS'];
  const randomCourseName = courseList[Math.floor(Math.random()*courseList.length)];
  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>

      <p>More Tests</p>
      <NavLink
        className='text-white'
        style={({isActive}) => {
          return {
            backgroundColor : isActive ? "green" : "red"
          }
        }}
      to={`/learn/course/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>
      <NavLink className='btn btn-light' to={`/learn/course/tests`}>
        tests
      </NavLink>

      <Outlet />
    </div>
    
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles List</h1>
      <h4>Bundles Card</h4>
    </div>
  );
}

function CourseID() {
  const navigate = useNavigate();
  const {courseid} = useParams();
  return (
    <div>
      <h1>URL Params is : {courseid}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", {state: courseid });
        }}
      className='btn btn-warning'>Price</button>
      <Link to="/dashboard" state={"DJANGO Course"}>Test Links</Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that i got here is : {location.state} </h1>
    </div>
  );
}


reportWebVitals();