import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useBlocker, useLocation, useNavigate } from 'react-router-dom';
import faviconw from '../NavBar/faviconw.png'
import '../NavBar/NavBar.component.css';
import { ABOUT, CONTACT, HOME, LOGIN, MY_APPOINTMENTS, PROFILE, SERVICES, SLASH, USER_REGISTER } from '../../helpers/routes';
import { userUserContext } from '../context/UserContext';

function Navbar() {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  

  const userID = localStorage.getItem("userID");
  const [isLogged, setIsLogged] = useState(!!userID);

  
  // Manejar navegación al perfil
  const handleProfile = () => {
    setIsLogged(true);
    navigate(PROFILE);
  };

  // if(isLogged){
  //   navigate(MY_APPOINTMENTS)
  // } else {
  //   navigate(LOGIN)
  // }

  // Manejar cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("userData");
    setIsLogged(false)
    navigate(HOME);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={faviconw} alt="Banco Vanguardia Logo" className="logo-img" />
        <span className="logo-text">Banco Vanguardia</span>
      </div>

      <div>
        <ul className="nav-links">
          
            <a><Link to={HOME}>Inicio</Link></a>
          
            <a><Link to={SERVICES}>Servicios</Link></a>
          
            <a><Link to={ABOUT}>Sobre Nosotros</Link></a>
          
            <a><Link to={CONTACT}>Contacto</Link></a>
          
  
        {/* {localStorage.getItem(isLogged)  ? (
<>
            <a onClick={handleProfile} className="session-link">
              Perfil
            </a>
            <a onClick={handleLogout} className="session-link">
              Cerrar Sesión
            </a>
          </>
          
        ) : ( */}

          <>
            <a><Link to={LOGIN} >
              Iniciar Sesión
            </Link></a>
            <a><Link to={USER_REGISTER} >
              Regístrate
            </Link></a>
          </>


        {/* )} */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
