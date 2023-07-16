import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllSingleProducts from './AllSingleProducts';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetch(`http://localhost:5000/api/v1/product?categories=${props.categories}`)
         .then((res) => res.json())
         .then((data) => setProducts(data.data));
     }, [props.categories]);
    return (
        <div>
             <div className="container grid lg:grid-cols-4 sm:grid-flow-row md:grid-cols-2 p-8 mx-auto">
        {products.slice(0, 8).map((detail) => (
          <AllSingleProducts
            key={detail.id}
            detail={detail}
          ></AllSingleProducts>
        ))}
      </div>
        </div>
    );
};

export default Products;