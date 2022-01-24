import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Courses from './screens/Courses';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import createGlobalStyle from './styles/global';

const GlobalStyle = createGlobalStyle;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="*" element={<NotFound />} />                
    </Routes>
    <React.StrictMode>
      <GlobalStyle /> 
    </React.StrictMode>      
  </BrowserRouter>,
  document.getElementById('root')
);
