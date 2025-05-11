import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import styles from './styles/styles';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { HOME, LOGIN } from '../../helpers/routes';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
//    apellido: '',
    birthdate: '',
    nDni: '',
    email: '',
    username: '',
    password: '',
//    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(formData.birthdate).getFullYear();

    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
//    if (!formData.apellido) newErrors.apellido = 'El apellido es obligatorio';
    if (!formData.birthdate) newErrors.birthdate = 'La fecha de nacimiento es obligatoria';
    else if (birthYear > 2006) newErrors.birthdate = 'Debes ser mayor de 18 años';
    
    if (!formData.nDni) newErrors.nDni = 'El número de identificación es obligatorio';
    if (!formData.username) newErrors.username = 'El nombre de usuario es obligatorio';
    if (!validateEmail(formData.email)) newErrors.email = 'El correo electrónico no es válido';
    if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
//    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
      .post('http://localhost:3000/users/register', formData)
      alert ("Usuario creado con exito");
          setFormData({
              name: '',
//              apellido: '',
              birthdate: '',
              nDni: '',
              email: '',
              username: '',
              password: '',
//              confirmPassword: '',
          })
      navigate(LOGIN)
    } else {
      console.log('No te puedo registrar en nuestra base de datos');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const returnBack = () => {
    navigate(HOME)
  }

return (
  <div style={styles.container}>
    
    <form style={styles.form} onSubmit={handleSubmit}>
      {/* <a onClick={returnBack} style={styles.button}>Atrás</a> */}
      <h2 style={styles.title}>Crea una cuenta</h2>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="nombre">Nombre y Apellido</label>
        <InputField
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Introduce tu nombre"
          style={styles.input}
        />
        {errors.name && <span style={styles.error}>{errors.name}</span>}
      </div>

      {/* <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="apellido">Apellido</label>
        <InputField
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Introduce tu apellido"
          style={styles.input}
        />
        {errors.apellido && <span style={styles.error}>{errors.apellido}</span>}
      </div> */}

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          max="2006-12-31"
          style={styles.input}
        />
        {errors.birthdate && <span style={styles.error}>{errors.birthdate}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="numeroIdentificacion">Número de Identificación</label>
        <InputField
          type="text"
          id="nDni"
          name="nDni"
          value={formData.nDni}
          onChange={handleChange}
          placeholder="Introduce tu número de identificación"
          style={styles.input}
        />
        {errors.nDni && <span style={styles.error}>{errors.nDni}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="nombreUsuario">Nombre de Usuario</label>
        <InputField
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Introduce tu nombre de usuario"
          style={styles.input}
        />
        {errors.username && <span style={styles.error}>{errors.username}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="correoElectronico">Correo Electrónico</label>
        <InputField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Introduce tu correo electrónico"
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="contrasena">Contraseña</label>
        <InputField
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Introduce tu contraseña"
          style={styles.input}
        />
        {errors.password && <span style={styles.error}>{errors.password}</span>}
      

      {/* <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="repetirContrasena">Repetir Contraseña</label>
        <InputField
          type="password"
          id="repetirContrasena"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Repite tu contraseña"
          style={styles.input}
        />
        {errors.confirmPassword && <span style={styles.error}>{errors.confirmPassword}</span>}
      </div> */}

        <button
          type="button"
          onClick={toggleShowPassword}
         style={styles.showPasswordButton}
        >
          {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
        </button>
      </div>

      <button type="submit" style={styles.button}>Registrarse</button>

      <p style={styles.p}>Si tienes cuenta <Link to="/inicio_sesion">Inicia Sesión</Link></p>
      
    </form>
  </div>
);
};

export default Register;