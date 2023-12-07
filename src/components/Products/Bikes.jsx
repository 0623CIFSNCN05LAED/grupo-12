import React from 'react';
import PropTypes from 'prop-types';
import Bike from "./bikes.json";


const Bikes = ({ marca, nombre, categoria,img, precio, descripcion }) => {
  return (
    <div className="bike">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h2>{marca}</h2>
      <h2>{categoria}</h2>
      <p>${precio}</p>
      <p>{descripcion}</p>

    </div>
  );
};

Bike.propTypes = {
  nombre: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export default Bikes;
