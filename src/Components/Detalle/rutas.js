import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Detalle from './detalle';
import Cafe from './cafe';
function Rutas() {

          return (
            <Container className="mt-3">
                <Routes>
                    <Route path="/Listado" element={<Cafe />} /> 
                    <Route path="/" element={<Detalle />} />
                </Routes>
            </Container>
        );
    }
    


export default Rutas;

