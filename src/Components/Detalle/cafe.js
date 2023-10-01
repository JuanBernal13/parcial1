import React from "react";

const Cafe = ({ cafe, onCafeClick }) => { 

  const onclick = () => {
    onCafeClick(cafe.id);
  }
  
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
