import  { useState, useEffect } from 'react';

const Bikes = () => {
  const [bikesData, setBikesData] = useState({count: 0, countByCategory: 0, bikes: []});

  useEffect(() => {
    // Realiza la solicitud al backend para obtener datos de bicicletas
    const fetchData = async () => {
    const response = await fetch('http://localhost:3030/api/products') // Ajusta la URL según tu backend
    const result = await response.json(); 
    setBikesData({
      count: result.data.count,
      countByCategory: result.data.countByCategory,
      bikes: result.data.bikes
    });
  };

  fetchData();
  
 }, []);

  return (
    <div>
      <div>
        { bikesData.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          bikesData.bikes.map((bike) => (
            <div className="bike-card" key={bike.id}>
              <h2 className="bike-title">{bike.name}</h2>
              <p className="bike-info">Marca: {bike.brand}</p>
              <p className="bike-info">Categoría: {bike.category}</p>
              <img className="bike-image" src={bike.image} alt={bike.name} />
              <p className="bike-info">Descripción: {bike.description}</p>
              <p className="bike-info">Precio: ${bike.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
      
    

};

export default Bikes;
