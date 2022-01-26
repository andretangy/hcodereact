import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Courses from './screens/Courses';
import CoursesScheduled from './screens/CoursesScheduled';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import Users from './screens/Users';
import UsersNew from './screens/UsersNew';
import createGlobalStyle from './styles/global';

const GlobalStyle = createGlobalStyle;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses-scheduled" element={<CoursesScheduled />}/>
      <Route path="users" element={<Users />}/>
      <Route path="users/new" element={<UsersNew />}/>
      <Route path="courses" element={<Courses />}/>
      <Route path="*" element={<NotFound />} />  
      <Route path="contact" element={<Contact />}/>     
      <Route path="login" element={<Login />}/>           
    </Routes>
    <React.StrictMode>
      <GlobalStyle /> 
    </React.StrictMode>      
  </BrowserRouter>,
  document.getElementById('root')
);
