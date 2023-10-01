import React from 'react';
import Fondo from '../../imagenes/Fondo.png';
import './banner.css';
function Banner() {
    return (
        <div>
            <h1 className="titulo">El aroma magico </h1>
            <img src={Fondo} alt='Fondo' />
        </div>
    );
}

export default Banner;
