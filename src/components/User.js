import { Link } from "react-router-dom";
import React from "react";

function User(props) {
  let id = `/FindUser/${props.id}`
  //console.log("Result " + id);

  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 20 + "rem" }}
              src={props.image}
            />
          </div>
          <p>
            {props.name} {props.lastname}<br></br>
            {props.email}
          </p>
          <p>_____________</p>
            <Link className="product__button" to={id}>
              Detalle
            </Link>
          </div>
               </div>
    </div>
  );
}

export default User;