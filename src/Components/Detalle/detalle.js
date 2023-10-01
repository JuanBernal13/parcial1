import React, { useState, useEffect } from "react";
import Cafe from "./cafe.js"; 
import './detalle.css'; 
import { FormattedMessage } from 'react-intl';

const Detalle = () => {
    const [cafeSelectedDetail, setCafesSelectedDetail] = useState({});
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => setCafes(data))
            .catch(error => console.error('Hubo un error cargando los cafés:', error));
    }, []);
    
    function traerInfoCafe(id) {
        fetch(`http://localhost:3001/cafes/${id}`)
            .then(response => response.json())
            .then(data => setCafesSelectedDetail(data))
            .catch(error => console.error('Hubo un error cargando el café:', error));
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <table className="table">
                        <thead className="black-header">
                            <tr>
                            <th><FormattedMessage id="table.header.number" /></th>
                <th><FormattedMessage id="table.header.name" /></th>
                <th><FormattedMessage id="table.header.type" /></th>
                <th><FormattedMessage id="table.header.region" /></th>
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
        <div className="card" style={{ textAlign: 'center' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <b>{cafeSelectedDetail.nombre}</b>
                <img src={cafeSelectedDetail.imagen} alt={cafeSelectedDetail.nombre} className="card-img-top" />
                
                <b>
                    <p className="card-text">
                        <FormattedMessage id="cultivo.fecha" defaultMessage="Fecha de Cultivo" />: {cafeSelectedDetail.fecha_cultivo}
                    </p>
                </b>
                
                <p className="card-text">
                    <FormattedMessage id="notas" defaultMessage="Notas" />: {cafeSelectedDetail.notas}
                </p>
                
                <p className="card-text">
                    <b>
                        <FormattedMessage id="cultivo.altura" defaultMessage="Cultivado a una altura de" />: {cafeSelectedDetail.altura}m
                    </b>
                </p>
            </div>
        </div>
    )}
</div>
            </div>
        </div>
    );
}

export default Detalle;
