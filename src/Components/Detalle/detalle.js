    import React, { useState } from "react";
    import Cafe from "./cafe.js"; 
    import Fondo from '../../imagenes/Fondo.png';
    import Banner from "./banner.js";
    import './detalle.css'; // Asegúrate de que la ruta sea correcta
    const Detalle = () => {
        const [cafeSelectedDetail, setCafesSelectedDetail] = useState({});
        
        const cafes = [
            {
                id: 1,
                nombre: "Café con leche",
                tipo: "Bebida caliente",
                region: "Latinoamérica",
                imagen: "url_de_imagen",
                fechaDeVencimiento: "25/03/2022", 
                ingredientes: ["Café", "Leche"],  
                altura: "1200m",
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
               <div className="col-4 background" >
    {cafeSelectedDetail && (
        <div className="card" style={{ textAlign: 'center' }}>
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <b>{cafeSelectedDetail.nombre}</b>
                <img src={cafeSelectedDetail.imagen} alt={cafeSelectedDetail.nombre} className="card-img-top" />

                <p className="card-text"> {cafeSelectedDetail.fechaDeVencimiento}</p>
                <p className="card-text">Notas: {cafeSelectedDetail.ingredientes.join(', ')}</p>
                <b><p className="card-text">Cultivado a una altura de : {cafeSelectedDetail.altura}</p></b>
            </div>
        </div>
    )}
</div>\
            </div>
        </div>
        );
    }

    export default Detalle;