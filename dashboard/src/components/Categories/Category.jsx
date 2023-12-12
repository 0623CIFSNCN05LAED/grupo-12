import { Component } from "react";
import CategoryItem from "./ItemCategory";



class Category extends Component {
    constructor(props) {
      super(props);
      //Especifico de categorias
      this.state = {
        category : []
      };
    }
  
  componentDidMount(){
    // fetch('http://localhost:3001/api/category').then((response) => {
    //   return response.json();
    // })
    // .then((json) => {
    //   const category = json.data;
    //   console.log('category', category);
    //   this.setState({
    //     category: category
    //   })
    // })
  }
  
  
    // render() {
    //   return (
    //     <section className="content">
    //       <h2 className="mt-3">Categoria</h2>
    //       <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
    //         <button
    //           type="button"
    //           className="list-group-item list-group-item-action active text-center"
    //           aria-current="true"
    //         >
    //           Listado de Categoria de las películas
    //         </button>
    //         {this.state.category.length === 0 ?
    //           "Cargando..." :
    //         this.state.category.map((category) => (
    //           <categoryItem key={category.id} name={category.name} />
    //         ))}
    //       </div>
    //     </section>
    //   );
   // }
  }
  
  export default Category;
  