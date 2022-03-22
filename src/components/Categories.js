import React from "react";

function Categories(props) {
  console.log(props);
  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            Dulces: {props.dulces}
            Amaderados: {props.amaderados}
            Cítricos: {props.citricos}
            Florales: {props.florales}
            Frutales: {props.frutales}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;