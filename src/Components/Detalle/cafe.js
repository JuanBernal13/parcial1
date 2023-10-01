// Componente Cafe.js
import React from "react";

const Cafe = (props) => {

  const onclick = () => {
    console.log("hola");
  }
  
  const { cafe } = props; // Accediendo a la prop 'cafe' que pasas desde Detalle
  
  return (
    <tr onClick={onclick}>
      <th scope="row">{cafe.id}</th>
      <td>{cafe.nombre}</td>
      <td>{cafe.tipo}</td>
      <td>{cafe.region}</td>
    </tr>
  );
};

export default Cafe;
