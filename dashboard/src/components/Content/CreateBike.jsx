import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateBike = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  
  const [bikeData, setBikeData] = useState({
    modelName:'',
    brand: '',
    category: '',
    size: '',
    color: '',
    description: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await axios.get('http://localhost:3030/api/products');
        const { brands, categories, sizes, colors } = response.data.data;

        setCategories(categories);
        setBrands(brands);
        setSizes(sizes);
        setColors(colors);
     
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBikeData({ ...bikeData, [name]: value });
  };

  const handleImageChange = (e) => { 
    const file = e.target.files[0];
    console.log(file);
    setBikeData({ ...bikeData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      const formData = new FormData();
      formData.append('modelName', bikeData.modelName);
      formData.append('brand', bikeData.brand);
      formData.append('category', bikeData.category);
      formData.append('size', bikeData.size);
      formData.append('color', bikeData.color);
      formData.append('description', bikeData.description);
      formData.append('price', bikeData.price);
      formData.append('image', bikeData.image);

      const response = await axios.post('http://localhost:3030/api/createBike', formData);
      console.log('Bike created:', response.data);
      
    
    
  };

  return (
    <form onSubmit={handleSubmit} className="card card-container"> 
     <label>
        Nombre del modelo:
        <input type="text" name="modelName" value={bikeData.name} onChange={handleInputChange} />
      </label>
      <label>
        Brand:
        <select name="brand" value={bikeData.brand} onChange={handleInputChange}>
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Category:
        <select name="category" value={bikeData.category} onChange={handleInputChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Size:
        <select name="size" value={bikeData.size} onChange={handleInputChange}>
          <option value="">Select Size</option>
          {sizes.map((size) => (
            <option key={size.id} value={size.id}>
              {size.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Color:
        <select name="color" value={bikeData.color} onChange={handleInputChange}>
          <option value="">Select Color</option>
          {colors.map((color) => (
            <option key={color.id} value={color.id}>
              {color.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Description:
        <input type="text" name="description" value={bikeData.description} onChange={handleInputChange} />
      </label>

      <label>
        Price:
        <input type="text" name="price" value={bikeData.price} onChange={handleInputChange} />
      </label>

      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>

      <button type="submit">Create Bike</button>
    </form>
  );
};

export default CreateBike;
