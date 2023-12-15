import  { useState, useEffect } from 'react';

const Users = () => {
  const [UsersData, setUsersData] = useState({});
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
        { UsersData.length === 0 ? (
          <p>Cargando...</p>
        ) : (   
            <p>Hola</p>
        //     UsersData.users.map(user => (
        //      <div key={user.id}>
        //     <h2>{user.name}{user.lastName}</h2>
        //      <p>Email: {user.email}</p>
        //     </div>
        //    ))
        )}
      </div>
    </div>
  );
      


};

export default Users;