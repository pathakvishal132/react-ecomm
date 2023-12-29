// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About';
import './App.css';
import Category from './Category';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Contact from './Contact';
import Footer from './footer.js';
import MainCart from './MainCart';
import MainNavbar from './navigation/mainnavbar.js';
import Vendor from './vendor';




function App() {
  // const adminUser ={
  //   email: "admin@gmail.com",
  //   passoword: "admin@123"
  // }
  // const [user, setUser] = useState({nmae:"", email:""});
  // const [error, setError] = useState("");

  // const Login = () => {
  //   console.log(details);
  // }

  // const Logout = () => {
  //   console.log("Logout");
  // }

  return (
    <>

      <Router>
        <MainNavbar/>
          
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/vendor' element={<Vendor/>} />
            <Route path='/cart' element={<MainCart/>}/>            
            <Route path='/category' element={<Category/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
          
        <Footer/>
      </Router>

    </>
  );
}

export default App;
