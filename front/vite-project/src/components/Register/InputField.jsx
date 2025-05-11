import React from 'react';
import styles from './styles/styles';

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles.input}
    />
  );
};

export default InputField;
