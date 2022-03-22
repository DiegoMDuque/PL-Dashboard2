import React, { useState, useEffect } from "react";
import Categories from "./Categories";

function CategoriesInDb() {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    fetch(`https://scent-zone.herokuapp.com/api/products`)
    .then(response => response.json())
    .then(data => {
      setCategories(data)
    })
  }, []);

  console.log("DB -> " + categories);

  const content = (
    <p>Cargando...</p>
  )

 /*  const content =
    Categories.length === 0 ? (
      <p>Cargando...</p>
    ) : (
      Categories.map((product) => (
        <Categories
          dulces={product.dulces}
          amaderados={product.amaderados}
          citricos={product.citricos}
          florales={product.florales}
          frutales={product.frutales}
        ></Categories>
      ))
    );
 */

  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Listado de Categorías
        </h5>
      </div>
      {content}
    </div>
  );
}

export default CategoriesInDb;