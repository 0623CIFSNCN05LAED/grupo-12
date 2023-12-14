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
      <div className="card">
        { bikesData.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          bikesData.bikes.map(bike => (
            <div key={bike.id}>
            <h2>{bike.name}</h2>
            <p>Marca: {bike.brand}</p>
            <p>Categoría: {bike.category}</p>
            <img src={bike.image} alt={bike.name} />
            <p>Descripción: {bike.description}</p>
            <p>Precio: ${bike.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
      


      // {/* {bikesData.length === 0 
      // ? "Cargando..."
      // :bikesData.map((bike, index) => (
      //   <div key={index}>
      //     <h2>{bike.name}</h2>
      //     <p>Marca: {bike.brand}</p>
      //     <p>Categoría: {bike.category}</p>
      //     <img src={bike.image} alt={bike.name} />
      //     <p>Descripción: {bike.description}</p>
      //     <p>Precio: ${bike.price}</p>
      //   </div>
      // ))} */}
    

};

export default Bikes;
