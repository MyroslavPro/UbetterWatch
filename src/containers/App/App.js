import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import  SignIn from '../../components/SignIn/SignIn';
import SignUp  from '../../components/SignUp/SignUp';
import Home from '../Home/Home';
import User from '../../components/User/User';

function App() {
  return (
    <div className= "App">
      <Router>
        <Header />
        <div className = "PageWrapper">
          <Routes> 
            <Route path="/" element={<Home />}/> 
            <Route path="/about-us" element={<>Hi</>}/> 
            <Route path="/login" element={<SignIn />}/> 
            <Route path="/sign-up" element={<SignUp />}/> 
            <Route path="/user" element={<User />}/> 
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
