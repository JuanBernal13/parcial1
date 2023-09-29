import React, { useState } from "react";
import Cafe from "./cafe.js";
import { FormattedMessage } from 'react-intl';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const Detalle = () => {
    const [cafes, setCafes] = useState([]);
  const [cafeSelected, setCafesSelected] = useState([]);
  const [cafeSelectedDetail, setCafesSelectedDetail] = useState([]);;
{

    function traerInfoCafe(id){

    }

    
    const [cafes] = useState([
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

  <div className="container mt-5">
  <div className="row">
    <div className="col-8">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cafes.map((cafe, index) => (
          <Col key={index}>
            <div
              className="card h-100"
              onClick={() => traerInfoCafe(cafe.id)}
            >   
              <img src={cafe.image} className="card-img-top" alt="foto" />
              <div className="card-body">
                <Cafe cafe></Cafe>
              </div>

            </div>
          </Col>
        ))}
      </div>
    </div>

    <div className="col-4 background">
      {Object.keys(cafeSelectedDetail).length > 0 && (
        <div>
          <h2> {cafeSelectedDetail.name}</h2><br/>
          <p><span style={{ fontWeight: 'bold', color: 'black' }}>Imagen:</span> {cafeSelectedDetail.imagen}</p>
          <p><span style={{ fontWeight: 'bold', color: 'black' }}> <FormattedMessage /> </span> {cafeSelectedDetail.fecha}</p>
          <p><span style={{ fontWeight: 'bold', color: 'black' }}><FormattedMessage/></span> {cafeSelectedDetail.titulo}</p>
          <p><span style={{ fontWeight: 'bold', color: 'black' }}><FormattedMessage /></span> {cafeSelectedDetail.caracteristicas}</p>
    

        </div>
      )}
    </div>
  </div>
</div>



}
}
export default Detalle;

