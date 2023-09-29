import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import App from "../App";
import Detalle from './detalle';
import cafe from './cafe';
function Rutas() {


    const [Cafes] = useState([
        {
                "id": 1,
                "nombre": "Café con leche",
                "tipo": "Bebida caliente",
                "region": "Latinoamérica"
            },
            {
                "id": 1,
                "nombre": "Café con leche",
                "tipo": "Bebida caliente",
                "region": "Latinoamérica"
            },
            {
                "id": 1,
                "nombre": "Café con leche",
                "tipo": "Bebida caliente",
                "region": "Latinoamérica"
            },
            {
                "id": 1,
                "nombre": "Café con leche",
                "tipo": "Bebida caliente",
                "region": "Latinoamérica"
            },
            {
                "id": 1,
                "nombre": "Café con leche",
                "tipo": "Bebida caliente",
                "region": "Latinoamérica"
            },
            {
                "id": 1,
                "nombre": "Café con leche",
                "tipo": "Bebida caliente",
                "region": "Latinoamérica"
            }
        
          ]);
  return (
    <Container className="mt-3">
      <Routes>
        <Route path="/Listado" element={<cafe  />} />
        <Route path="/" element={<App />} />
        
      
      </Routes>
    </Container>
  );
}


export default Rutas;

