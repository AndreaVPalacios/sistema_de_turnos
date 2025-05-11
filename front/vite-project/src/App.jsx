import React, { Children } from 'react';
import Navbar from '../src/components/NavBar/NavBar.jsx';
import Home from './view/Home.jsx';
import AppointmentsView from './view/AppointmentsView.jsx';
import './index.css'
import Login from './view/LoginView.jsx';
import RegisterForm from './view/RegisterView.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes,Route, useLocation, Navigate } from 'react-router-dom'; 
import ServiceView from './view/ServiceView.jsx';
import AboutView from './view/AboutView.jsx';
import ContactView from './view/ContactView.jsx';
import ErrorPage from './view/ErrorPage.jsx';
import ScheduleView from './view/ScheduleView.jsx';
import { HOME, LOGIN, MY_APPOINTMENTS, PROFILE, SLASH, TURN_CANCELLED, TURN_QUESTION, TURN_SUCCESS, USER_REGISTER } from './helpers/routes.js';
import UserProfileView from './view/UserProfile.jsx';
import TurnSuccess from './components/TurnSuccess/TurnSuccess.jsx';
import TurnSuccessView from './view/TurnSuccessView.jsx';
import UknownUserView from './view/UknownUserView.jsx';
import TurnCancelled from './components/TurnSuccess/TurnCancelled.jsx';
import TurnCancelledView from './view/TurnCancelledView.jsx';
import TurnQuestionView from './view/TurnQuestionView.jsx';

function App() {
  const location = useLocation()

  return (
    <div>
      {location.pathname !== "/inicio_sesion" && location.pathname !== "/miperfil" && 
          location.pathname !== "/mis_turnos" && <Navbar/>}
      
        <Routes>
          <Route path='/' element={<UknownUserView/>}/>
          <Route path='/inicio' element={<Home/>}/>
          <Route path='/servicios' element={<ServiceView/>} />
          <Route path='/sobre-nosotros' element={<AboutView/>} />
          <Route path='/contacto' element={<ContactView/>} />

          <Route path={LOGIN} element={<Login/>}/>
          <Route path={USER_REGISTER} element={<RegisterForm/>} />

          <Route path={PROFILE} element={
              <UserProfileView />
          }/>
          <Route path={MY_APPOINTMENTS} element={
            <AppointmentsView/>   
          }/>

          <Route path='*' element={<ErrorPage />} />
          
          <Route path={TURN_SUCCESS} element={<TurnSuccessView/>}/>

          <Route path={TURN_CANCELLED} element={<TurnCancelledView/>}/>

          <Route path={TURN_QUESTION} element={<TurnQuestionView/>}/>
          
        </Routes>
        
      <Footer />
    </div>
  );
}

export default App;