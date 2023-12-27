import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min'; 

const Bikes = () => {
  const [bikesData, setBikesData] = useState({ count: 0, countByCategory: 0, bikes: [] });  

  console.log('bikeData', bikesData);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/products');
        const result = await response.json();
        setBikesData({
          count: result.data.count,
          countByCategory: result.data.countByCategory,
          bikes: result.data.bikes,
        });
      } catch (error) {
        console.error('Error fetching bikes:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="card">
        {bikesData.bikes.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          bikesData.bikes.map((bike) => (
            <div key={bike.id}>
              <h2>{bike.name}</h2>
              <p>Marca: {bike.brand}</p>
              <p>Categoría: {bike.category}</p>
              <img src={bike.image} alt={bike.name} />
              <p>Descripción: {bike.description}</p>
              <p>Precio: ${bike.price}</p>
              <Link to={{
                pathname: `/editBike/${bike.id}`,
                state: { bikeData: bike }
              }}>
              <button>
               Editar
              </button>
              </Link>
            </div>
          ))
        )}
      </div>

    </div>
  )
};

export default Bikes;
