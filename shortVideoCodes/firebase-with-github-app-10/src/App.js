import React, {useState} from 'react';
import './App.css';

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


// React Toasity
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

//react-router
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//firebase
import firebase from 'firebase/app';
import "firebase/auth";

// Components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;