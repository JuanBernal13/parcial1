import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imagen from './imagenes/Fondo.png';
import Navbar from "react-bootstrap/Navbar";  
import Nav from "react-bootstrap/Nav";  
import Detalle from './Components/Detalle/detalle';
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
        
 
        <div className="col d-flex align-items-center" style={{ backgroundColor: 'white', padding: '20px' }}>
          <div style={{ width: '100%' }}>
          <img src= "./imagenes/Fondo.png" alt='Fondo'></img>          
          <p>  Aqui va la imagen principal</p>
            <h1>Inicio de sesion </h1>
            <Form>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} />
                {!validationStates.emailState && <Form.Text className="text-danger">Por favor, inserte un usuario valido.</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña </Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
                {!validationStates.passwordState && <Form.Text className="text-danger">Su contraseña debe contener números y letras y tener al menos 4 caracteres de longitud.</Form.Text>}
              </Form.Group>
              <Nav.Link href="/Listado">Iniciar sesion</Nav.Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
