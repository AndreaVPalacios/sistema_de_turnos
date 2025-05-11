const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfd7c7',
  //   position: 'fixed',
  //   top: '0',
  //   left: '0',
  //   width: '100%',
     height: '120vh',
  //  background: 'rgba(0, 0, 0, 0.5)',
  //  backdropFilter: 'blur(5px)',
  //  zIndex: '1000'
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    width: '100%',
    maxWidth: '450px',
    fontFamily: 'Bebas Neue'
  },
  title: {
    color: '#40798C',
    textAlign: 'center',
    fontFamily: 'Cal Sans'
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#5a3e36', // Marrón oscuro
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontFamily: 'Cal Sans, sans-serif',
    
  },
  inputFocus: {
    borderColor: '#b22c2c',
    outline: 'none',
    
  },
  placeholder: {
    color: '#CFD7C7'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0B2027',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#8b1f1f',
  },
  showPasswordButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#40798C',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'right',
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  p:{
    alignItems: 'center',
 //   textAlign:'center'
    paddingLeft: '25px'
  }
};
  
  export default styles;
  