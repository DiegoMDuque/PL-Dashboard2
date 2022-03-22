import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

function FindProduct() {
  const [product, setProducts] = useState([]);
  const [productImage, setProductImage] = useState([]);

  let { id } = useParams();

  useEffect(async () => {
    await obtenerDatos();
    await obtenerImage();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(`https://scent-zone.herokuapp.com/api/products/${id}`);
    const productPrevio = await data.json();
    let product = productPrevio.product
    setProducts(product);
  };

  const obtenerImage= async () => {
    const data = await fetch(`https://scent-zone.herokuapp.com/api/products/${id}`);
    const productImagePrevio = await data.json();
    let productImage = productImagePrevio.productImage
    setProductImage(productImage);
  };
 
  const result = (
    <ProductDetail
      name={product.product_name}
      description={product.description}
      price={product.price}
      size={product.size}
      image={productImage}      
    />
  );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Detalle del Producto
          </h5>
        </div>
        {result}
      </div>
    </div>
  );
}
export default FindProduct;
