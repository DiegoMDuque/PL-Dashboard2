import React from "react";

function Categories(props) {
  console.log("props ->" +props);
  return (
    <div className="col-lg-6 mb-4">
        <div className="card-body">
          <p>
            DULCES: {props.dulces}
            <br></br>
            AMADERADOS: {props.amaderados}
            <br></br>
            CÍTRICOS: {props.citricos}
            <br></br>
            FLORALES: {props.florales}
            <br></br>
            FRUTALES: {props.frutales}
          </p>
        </div>    
    </div>
  );
}

export default Categories;