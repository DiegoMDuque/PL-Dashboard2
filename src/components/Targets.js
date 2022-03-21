import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function Targets() {

  const [Products, setProducts] = useState("Cargando...");

  useEffect(async () => {
    await obtenerDatosP();
  }, []);

  const obtenerDatosP = async () => {
    const data = await fetch("https://artisanmarket.herokuapp.com/api/products");
    const productPrevio = await data.json();
    let product = productPrevio.products
    setProducts(product);
  };

  const count = Products.length

  const [Users, setUsers] = useState([]);

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://scent-zone.herokuapp.com/api/users");
    const userPrevio = await data.json();
    let user = userPrevio.users
    setUsers(user);
  };
  const Usercount = Users.length

  /* <!-- Products in DB --> */

  let productsInDB = {
    title: "Total Productos",
    color: "primary",
    cuantity: count,
    icon: "fa-clipboard-list",
  };

  /* <!-- Users quantity --> */

  let usersQuantity = {
    title: "Cantidad de usuarios",
    color: "warning",
    cuantity: Usercount,
    icon: "fa-user-check",
  };

  let cartProps = [productsInDB, usersQuantity];
  return (
    <div className="row">
      {cartProps.map((product, i) => {
        return <SmallCard {...product} key={i} />;
      })}
    </div>
  );
}

export default Targets;
