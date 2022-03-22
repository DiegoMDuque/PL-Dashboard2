import React, { useState, useEffect } from "react";
import Categories from "./Categories";

function ProductsInDb() {
  const [Products, setProducts] = useState([]);

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://scent-zone.herokuapp.com/api/products");
    const productPrevio = await data.json();
    let product = productPrevio.countByCategory
    setProducts(product);
  };

  const content =
    Products.length === 0 ? (
      <p>Cargando...</p>
    ) : (
      Products.map((product) => (
        <Categories
          dulces={product.dulces}
          amaderados={product.amaderados}
          citricos={product.citricos}
          florales={product.florales}
          frutales={product.frutales}
        ></Categories>
      ))
    );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Listado de Categorías
        </h5>
      </div>
    </div>
  );
}

export default ProductsInDb;