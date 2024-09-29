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
const App = () => {
    return (
      <div className="app">
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}></Route>
          <Route
          path='login'
          element={
            <Login/>
            // <OpenRoute>
              
            // </OpenRoute>
          }
          />

          <Route path='signup' element={<Signup/>}/>

        </Routes>
        

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
