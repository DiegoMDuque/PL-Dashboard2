import React from "react";

function Categories(props) {
  console.log("props ->" +props);
  return (
    <div className="col-lg-6 mb-4">
        <div className="card-body">
          <p>
            DULCES: <p>{props.dulces}</p>
            <br></br>
            AMADERADOS: <p>{props.amaderados}</p>
            <br></br>
            CÍTRICOS: <p>{props.citricos}</p>
            <br></br>
            FLORALES: <p>{props.florales}</p>
            <br></br>
            FRUTALES: <p>{props.frutales}</p>
          </p>
        </div>    
    </div>
  );
}

export default Categories;