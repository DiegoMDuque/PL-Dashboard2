import React, { useState, useEffect } from "react";
import User from "./User";

function UsersInDb() {
  const [Users, setUsers] = useState([]);

  useEffect(async() => {
    await obtenerDatos(); 
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://scent-zone.herokuapp.com/api/users");
    const userPrevio = await data.json();
    let user = userPrevio.users
    setUsers(user);
  };

  const content =
    Users.length === 0 ? (
      <p>Cargando...</p>
    ) : (
      Users.map((user, index) => (
        <User
          key={index}
          name={user.first_name}
          email={user.email}
        ></User>
      ))
    );


console.log(Users);

  return (
    <div className="col-lg-6 mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Listado de Usuarios
          </h5>
        </div>
        {content}
      </div>
  );
}

export default UsersInDb;
