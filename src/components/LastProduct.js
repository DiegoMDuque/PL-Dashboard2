import { useState, useEffect } from "react";
import Product from "./Product";

function LastProduct() {
  const [product, setProducts] = useState([]);

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(`https://scent-zone.herokuapp.com/api/products/21`);
    const productPrevio = await data.json();
    let product = productPrevio.product
    setProducts(product);
  };

  console.log(product);

  const result = (
    <Product
      id={product.id}
      name={product.product_name}
      description={product.description}
      price={product.price}
      size={product.size}     
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
