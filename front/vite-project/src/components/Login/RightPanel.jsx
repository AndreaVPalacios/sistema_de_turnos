import React from 'react';
import LoginForm from './LoginForm';
import styles from '../Login/styles/styles';

const RightPanel = () => {
  return (
    <div style={styles.rightPanel}>
      <h2 style={styles.loginTitle}>Inicia Sesión</h2>
      <LoginForm />
    </div>
  );
};

export default RightPanel;
