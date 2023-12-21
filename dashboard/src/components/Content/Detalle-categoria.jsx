import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CategoryDetail = ({ match }) => {
  const { name } = match.params;
  const [categoryData, setCategoryData] = useState({
    count: 0,
    bikes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3030/api/products`);
      const result = await response.json();
      
      // Buscar datos de la categoría seleccionada
      const category = result.data.countByCategory[name] || { count: 0, bikes: [] };
      
      setCategoryData({
        count: category.count,
        bikes: category.bikes,
      });
    };

    fetchData();
  }, [name]);

  return (
    <div>
      <h2>Categoría Seleccionada: {name}</h2>
      <p>Cantidad de Bicicletas en la Categoría: {categoryData.count}</p>
      <h3>Bicicletas en la Categoría:</h3>
      <ul>
        {categoryData.bikes.map((bike) => (
          <li key={bike.id}>
            
            <div>
              <h4>{bike.name}</h4>
              <p>{bike.description}</p>
              <p>Precio: {bike.price}</p>
            </div>
            <div>
              <img src={bike.image} alt={bike.name} style={{ maxWidth: "100px" }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

CategoryDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CategoryDetail;