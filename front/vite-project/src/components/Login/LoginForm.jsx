import React, { useContext, useEffect, useState } from 'react';
import styles from '../Login/styles/styles';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MY_APPOINTMENTS, PROFILE, USER_REGISTER } from '../../helpers/routes';
import { userUserContext } from '../context/UserContext';
import { useAuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  const { setUserActive } = userUserContext();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'El nombre de usuario es obligatorio';
    if (!password) newErrors.password = 'La contraseña es obligatoria';
//    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if(validateForm()){
  //     await axios.post('http://localhost:3000/users/login', {username, password});
  //     alert('Hola de nuevo, has iniciado sesión')
  //     navigate(PROFILE)     
  //   } else {
  //     alert('No puedes iniciar sesión');
  //   }
  // };

  const postSubmit = async () => {
    validateForm();
    try {
      const loginUser = await axios.post('http://localhost:3000/users/login', { username, password })
      
       if(loginUser.status === 200){
          alert('Hola de nuevo, has iniciado sesión')
          setUserActive(loginUser.data.user)
          navigate(PROFILE)
        } else  
         alert('Contraseña incorrecta')
     } catch (error) {
      return alert('Usuario no encontrado', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    postSubmit();
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Iniciar Sesión</h2>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="nombreUsuario">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Introduce tu nombre de usuario"
            style={styles.input}
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="contrasena">Contraseña</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
          <button
            type="button"
            onClick={toggleShowPassword}
            style={styles.showPasswordButton}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
          </button>
        </div>
          
        <button type="submit" style={styles.button}>Iniciar Sesión</button>

        <p>Si no tienes cuenta <Link to={USER_REGISTER}>Regístrate Aqui</Link></p>
      
      </form>
    </div>
  );
};

export default LoginForm;
