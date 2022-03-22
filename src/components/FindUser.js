import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserDetail from "./UserDetail";

function FindUser() {
  const [user, setUsers] = useState([]);
  const [userImage, setUserImage] = useState([]);

  let { id } = useParams();

  useEffect(async () => {
    fetch(`https://scent-zone.herokuapp.com/api/users/${id}`)
    .then(response => response.json())
    .then(data => {
      setUsers(data.userData)
    })

    fetch(`https://scent-zone.herokuapp.com/api/users/${id}`)
    .then(response => response.json())
    .then(data => {
      setUserImage(data.userImage)
    })
  }, []);

  const result = (
    <UserDetail
      id={user.id}
      name={user.first_name}
      lastName={user.lastName}
      email={user.email}
      image={userImage.url}
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