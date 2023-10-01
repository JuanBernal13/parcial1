import React from 'react';
import Fondo from '../../imagenes/Fondo.png';
import './banner.css';

function Banner() {
    return (
        <div className="banner-container">
            <h1 className="titulo">El aroma mágico </h1>
            <img src={Fondo} alt='Fondo' className="banner-image" />
        </div>
    );
}

export default Banner;
