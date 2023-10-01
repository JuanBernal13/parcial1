import React, { useState } from "react";
import Cafe from "./cafe.js"; 
import Fondo from '../../imagenes/Fondo.png';
import Banner from "./banner.js";
const Detalle = () => {
    const [cafeSelectedDetail, setCafesSelectedDetail] = useState({});
    
    const cafes = [
        {
            "id": 1,
            "nombre": "Café con leche",
            "tipo": "Bebida caliente",
            "region": "Latinoamérica",
            "imagen": "url_de_imagen",
        },
        {
          "id": 2,
          "nombre": "Café con leche",
          "tipo": "Bebida caliente",
          "region": "Latinoamérica",
          "imagen": "url_de_imagen",
      },
      {
        "id": 3,
        "nombre": "Café con leche",
        "tipo": "Bebida caliente",
        "region": "Latinoamérica",
        "imagen": "url_de_imagen",
    },
   
    ];
    
    function traerInfoCafe(id) {
        const selectedCafe = cafes.find(cafe => cafe.id === id);
        setCafesSelectedDetail(selectedCafe || {});
    }

    return (
      <div className="container mt-5">
          <div className="row">
              <div className="col-8">
                  <table className="table">
                      <thead className="black-header">
                          <tr>
                              <th>#</th>
                              <th>Nombre</th>
                              <th>Tipo</th>
                              <th>Región</th>
                          </tr>
                      </thead>
                      <tbody>
                          {cafes.map((cafe) => (
                              <Cafe key={cafe.id} cafe={cafe} onCafeClick={traerInfoCafe} />
                          ))}
                      </tbody>
                  </table>
              </div>
              <div className="col-4 background">
                  {Object.keys(cafeSelectedDetail).length > 0 && (
                      <div>
                          {/* Contenido del detalle */}
                      </div>
                  )}
              </div>
          </div>
      </div>
  );
}

export default Detalle;
