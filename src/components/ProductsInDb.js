import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductsInDb() {
  const [Products, setProducts] = useState([]);

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://scent-zone.herokuapp.com/api/products");
    const productPrevio = await data.json();
    let product = productPrevio.products
    setProducts(product);
  };
  
  const content =
    Products.length === 0 ? (
      <p>Cargando...</p>
    ) : (
      Products.map((product, index) => (
        <Product
          key={index}
          id={product.id}
          name={product.product_name}
          image={product.product_image}
          category={product.category.category_name}
        ></Product>
      ))
    );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Listado de Productos
        </h5>
      </div>
      {content}
    </div>
  );
}

export default ProductsInDb;