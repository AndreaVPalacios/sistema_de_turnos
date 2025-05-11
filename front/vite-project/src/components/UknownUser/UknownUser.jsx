import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HOME, LOGIN } from '../../helpers/routes';
import '../UknownUser/styles.css'

const UknownUser = () => {
    const navigate = useNavigate()
    

    const handleSignIn = () => {
        navigate(LOGIN)
    }


    const handleLogout = () => {
      localStorage.removeItem("userID");
      localStorage.removeItem("userData");
      navigate(HOME)
    };


    return (
        <div className="notification-overlay">
        <div className="notification-box">
         <p className="notification-message">Hola!, eres usuario o invitado</p>
         <button className="notification-button" onClick={handleSignIn}>
              soy Usuario
            </button>
            <button className="notification-button" onClick={handleLogout}>
              soy Invitado
            </button>
            
          </div>
        </div>
    );
  };
  
  export default UknownUser;