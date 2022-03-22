import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserDetail from "./UserDetail";

function FindUser() {
  const [user, setUsers] = useState([]);
  let { id } = useParams();

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(`https://scent-zone.herokuapp.com/api/users/${id}`);
    const userPrevio = await data.json();
    let user = userPrevio.user
    setUsers(user);
  };

  const result = (
    <UserDetail
      id={user.id}
      name={user.first_name}
      lastName={user.lastName}
      email={user.email}
    />
  );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Detalle del Usuario
          </h5>
        </div>
        {result}
      </div>
    </div>
  );
}

export default FindUser;