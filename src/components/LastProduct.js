import { useState, useEffect } from "react";
import Product from "./Product";

function LastProduct() {
  const [product, setProducts] = useState([]);

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(`https://scent-zone.herokuapp.com/api/products`);
    const productPrevio = await data.json();
    let product = productPrevio.products
    setProducts(product);
  };

  const lastProduct = product[product.length - 1]

  const result = product.length === 0 ? (
    <p color="red">Cargando...</p>
  ) : (
    <Product
      id={lastProduct.id}
      name={lastProduct.product_name}
      description={lastProduct.description}
      price={lastProduct.price}
      size={lastProduct.size}
    />
  );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Último Producto
        </h5>
      </div>
      {result}
    </div>
  );
}
export default LastProduct;