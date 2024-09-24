import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes,Route } from 'react-router-dom';


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hooks from './pages/hooks';


// import './index.css';
// import App from './App';
// import Comp from './Comp';
// import PropsDemo from './PropsDemo';
// import Events from './Events';




// functional components

// function Display(){
//   return <h3>hello world from react</h3>
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <>
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Layout/>} >
    
    <Route index element ={<Home/>}></Route>
    <Route path="about" element ={<About/>}></Route>
    <Route path="contact" element ={<Contact/>}></Route>
    <Route path="hooks" element={<Hooks/>}></Route>


    </Route>
  </Routes>
  </BrowserRouter>

  
    </>
);








