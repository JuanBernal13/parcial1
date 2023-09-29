import React from "react";

const Cafe = (props) => {

  onclick = () => {
    console.log("hola");
  }
  return (
    <tr>
      <th scope="row">{props.cafes.id}</th>
      <td>{props.cafes.nombre}</td>
      <td>{props.cafes.tipo}</td>
      <td>{props.cafes.region}</td>

    </tr>
  );


 
};

export default Cafe;