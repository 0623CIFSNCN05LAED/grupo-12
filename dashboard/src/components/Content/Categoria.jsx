import { Route } from "react-router-dom";
import { useEffect, useState } from "react"; 
import CategoryLink from "./Link-categoria"; 
import CategoryDetail from "./Detalle-categoria";

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3030/api/products'); 
        const result = await response.json(); 
        console.log(result)
        setCategories(result.data.categories);
      };
     
      fetchData(); 
    }, []); 

    return (
      <section className="content row">
        <div className="col-6">
          <h2 className="mt-3">Géneros</h2>
          <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <button
              type="button"
              className="list-group-item list-group-item-action active text-center"
              aria-current="true"
            >
              Listado de categorias de bici
            </button>
            {categories.length === 0
              ? "Cargando..."
              : categories.map((category) => (
                <CategoryLink key={category.id} name={category.name} />
                ))}
          </div>
        </div> 
        <div className="col-6">
        <h2>Categoria Seleccionada:</h2>

          <Route path="/categorias/:name" component={CategoryDetail} /> 
        
      </div>
      </section> 
    );
  
   
  }
  
  export default Categories;
  