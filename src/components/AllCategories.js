import { useState, useEffect } from "react";
import Categories from "./Categories"

function AllCategories() {

    const [category, setCategories] = useState([]);

    useEffect(async () => {
        fetch(`https://scent-zone.herokuapp.com/api/products`)
            .then(response => response.json())
            .then(data => {
                setCategories(data.countByCategory)
            })
    }, []);

    const content =
        category.length === 0 ? (
            <p>Cargando...</p>
        ) : (
            <Categories
                dulces={category.dulces}
                amaderados={category.amaderados}
                citricos={category.citricos}
                florales={category.florales}
                frutales={category.frutales}
            ></Categories>

        );

    return (
        <div className="col-lg-6 mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                    Listado de Categorias
                </h5>
            </div>
            {content}
        </div>
    );
}

export default AllCategories;