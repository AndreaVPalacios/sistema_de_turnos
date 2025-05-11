import React, { useEffect, useState } from 'react';
import './styles.css';
import { HOME, MY_APPOINTMENTS, PROFILE } from '../../helpers/routes';
import AppointmentsView from '../../view/AppointmentsView';
import { Link, useNavigate } from 'react-router-dom';
import { userUserContext } from '../context/UserContext';

const UserProfile = () => {
  const navigate = useNavigate()
  const {userActive} = userUserContext()

  useEffect(() => {
    !userActive.name ? navigate(HOME) : navigate(PROFILE)
  },[userActive.name])

  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150" // Imagen de perfil por defecto
  );
  const [bannerImage, setBannerImage] = useState(
    "https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg" // Imagen de banner por defecto
  );

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  return (
    <div className="user-profile">
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <input
          type="file"
          accept="image/*"
          id="change-banner"
          className="hidden-input"
          onChange={handleBannerImageChange}
        />
        {/* <label htmlFor="change-banner" className="edit-banner-button">
          Cambiar Banner
        </label> */}
      </div>

      <div className="profile-section">
        <div className="profile-image-container">
          <img src={profileImage} alt="Perfil" className="profile-image" />
          <input
            type="file"
            accept="image/*"
            id="change-profile"
            className="hidden-input"
            onChange={handleProfileImageChange}
          />
          <label htmlFor="change-profile" className="edit-profile-button">
            Cambiar Foto de Perfil
          </label>
        </div>
      </div>

      <div className="info-section">
        <h2>¿Cómo funciona agendar turnos en Banco Vanguardia?</h2>
          <div className="info-cards">
            <div className="info-card">
              <p>
                En Banco Vanguardia, puedes agendar turnos de manera fácil y rápida a
                través de nuestra plataforma en línea. Simplemente selecciona la fecha
                y hora disponibles que más te convengan y confirma tu cita.
              </p>
            </div>
          <div className="info-card">
              < p>
              Ofrecemos servicios personalizados para atender tus necesidades
              bancarias, como consultas de cuentas, apertura de nuevos productos,
              y asesoramiento financiero.
              </p>
            </div>
          <div className="info-card">
            <p>
            Nuestro equipo siempre estará listo para ayudarte. ¡Agenda tu turno y
            ahorra tiempo!
          </p>
    </div>
  </div>

        <button className='button-turn' onClick={() => {navigate(MY_APPOINTMENTS)}}>Agendaré mi turno</button>
      </div>
    </div>
  );
};

export default UserProfile;

      {/* <a className="turn-button"><Link to={}></Link></a> */}