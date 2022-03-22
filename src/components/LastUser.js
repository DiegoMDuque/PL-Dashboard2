import React, { useState, useEffect } from "react";
import User from "./User";

function LastUser() {
  const [user, setuser] = useState([]);

  useEffect(async() => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://scent-zone.herokuapp.com/api/users");
    const userPrevio = await data.json();
    let user = userPrevio.users
    setuser(user);
  };

  const lastUser = user[user.length - 1]

  const content = user.length === 0 ? (
    <p color="red">Cargando...</p>
  ) :(
    <User
     id={lastUser.id}
     name={lastUser.first_name}
     lastName={lastUser.lastName}
     email={lastUser.email}
    />
  );
  return (
    <div className="col-lg-6 mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último Usuario
          </h5>
        </div>
        {content}
      </div>
  );
}

export default LastUser;