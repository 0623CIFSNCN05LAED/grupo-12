import  { useState, useEffect } from 'react';

const Bikes = () => {
  const [bikesData, setBikesData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud al backend para obtener datos de bicicletas
    fetch('http://localhost:3030/api/bikes') // Ajusta la URL según tu backend
      .then(response => response.json())
      .then(data => setBikesData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {bikesData.map((bike, index) => (
        <div key={index}>
          <h2>{bike.name}</h2>
          <p>Marca: {bike.brand}</p>
          <p>Categoría: {bike.category}</p>
          <img src={bike.image} alt={bike.name} />
          <p>Descripción: {bike.description}</p>
          <p>Precio: ${bike.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Bikes;
