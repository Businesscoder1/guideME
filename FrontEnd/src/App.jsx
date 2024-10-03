import React from 'react';
  

import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import { Routes,Route, Router } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Assessment1 from './Pages/Assessment1';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster, toast } from 'react-hot-toast';  
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Assessment2 from './Pages/Assessment2';
import Assessment3 from './Pages/Assessment3';
import MyProfile from './Components/core/Dashboard/MyProfile';
import Settings from './Components/core/Dashboard/Settings';
import EnrolledCourses from './Components/core/Dashboard/EnrolledCourses';
import AddCourse from './Components/core/Dashboard/AddCourse';
import MyCourses from './Components/core/Dashboard/MyCourses';
import EditCourse from './Components/core/Dashboard/EditCourse';
import Contact from './Pages/Contact';
import VerifyEmail from './Pages/VerifyEmail';

const App = () => {
    return (
      <div className="app">
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route
          path='login'
          element={<Login/> }/>

          <Route path='signup' element={<Signup/>}/>
          <Route path='/verify-email' element={<VerifyEmail/>}/>
          <Route path='forget-password' element={<ForgotPassword/>}/>

          <Route path='/assessment1' element={<Assessment1/>}/>
          <Route path='/assessment2' element={<Assessment2/>}/>
          <Route path='/assessment3' element={<Assessment3/>}/>
          <Route path='dashboard/my-profile' element={<MyProfile/>}/>
          <Route path='dashboard/Settings' element={<Settings/>}/>

        </Routes>
        
        {/* <Assessment1/> */}
        <Dashboard/>

        <Toaster
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* <Dashboard/> */}
       
      </div>
    );
  };

  export default App;
