import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";  
import Nav from "react-bootstrap/Nav";  
import Detalle from './detalle';
import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Rutas from './rutas';
import { useHistory } from 'react-router-dom';
function Login () {
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(validationStates.emailState && validationStates.passwordState){
            setIsFormValid(true); 
        } else {
            setErrorMessage('Por favor, asegúrate de que tu email y tu contraseña son válidos.');
        }
    }
  const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" });
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
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'white' }}>
      <div className="row" style={{ width: 1200, height: 600, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        
 
        <div className="col d-flex align-items-center" style={{ backgroundColor: '#f4eae5', padding: '20px' }}>
          <div style={{ width: '100%' }}>
            <h1>Inicio de sesion </h1>
            <Form>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <b><Form.Label>Nombre de usuario</Form.Label></b>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} />
                {!validationStates.emailState && <Form.Text className="text-danger">Por favor, inserte un usuario valido.</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <b><Form.Label>Contraseña </Form.Label></b>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
                {!validationStates.passwordState && <Form.Text className="text-danger">Su contraseña debe contener números y letras y tener al menos 4 caracteres de longitud.</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
  
</Form.Group>

                
<div className="row">
  <div className="col">
    <Link to="/detalle" className="nav-link">
      <Button variant="success" style={{ color: 'black' }}> <b>Iniciar sesion</b></Button>
    </Link>
  </div>
  <div className="col">
    <Button variant="danger" style={{ color: 'black' }}> <b>Cancelar</b></Button>
  </div>
</div>


            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;   
