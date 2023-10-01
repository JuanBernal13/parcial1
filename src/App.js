import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imagen from './imagenes/Fondo.png';
import Navbar from "react-bootstrap/Navbar";  
import Nav from "react-bootstrap/Nav";  
import Detalle from './Components/Detalle/detalle';
import Rutas from './Components/Detalle/rutas';
import { Link } from 'react-router-dom';
import { Login } from './Components/Detalle/login';


function App() {
  const [formValues, setFormValues] = useState({ email: "asasas", password: "", favClass: "1" });
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setFormValues({ ...formValues, password: passwordValue });

    const passwordRegex = /^(?=.*[a-zA-Z])([a-zA-Z0-9]+){5,}$/;
    setValidationStates({ ...validationStates, passwordState: passwordRegex.test(passwordValue) });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const emailRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){4,}$/;
    setValidationStates({ ...validationStates, emailState: emailRegex.test(formValues.email)});
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: '#f8f9fa' }}>
      <div className="row" style={{ width: 1200, height: 600, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
       
      </div>
    </div>
  );
}

export default App;
