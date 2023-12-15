import  { useState, useEffect } from 'react';

const Users = () => {
  const [UsersData, setUsersData] = useState({ users: [] });
console.log(UsersData)
  useEffect(() => {
    // Realiza la solicitud al backend para obtener datos de bicicletas
    const fetchData = async () => {
    const response = await fetch('http://localhost:3030/api/users') // Ajusta la URL según tu backend
    const result = await response.json(); 
    setUsersData({
      users: result.data.users
    });
  };

  fetchData();
  
 }, []);

 return (
    <div>
        
      <div className="card">
        <h3>Datos de Usuarios</h3>
        {UsersData.length === 0 ? (
          <p>Cargando...</p>
        ) : (
        
          UsersData.users.map(user => (
            <div key={user.id}>
              <h2>Id N°{user.id}</h2>
              <p>Nombre: {user.name}</p>
              <p>Apellido: {user.lastName}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
      


};

export default Users;