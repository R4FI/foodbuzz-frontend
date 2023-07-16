import React from "react";

import "./AllProducts.css";
import Tabex from "../Tab/Tabex";
const AllProducts = () => {


  return (
    <div>
      <div className="conatiner flex lg:flex-row flex-col maincontainer">
        <div className="mx-auto basis-1/3">
          <h2 className="menuchechkout">Checkout Our Menu</h2>
        </div>

        <div className="mx-auto basis-1/3 media"></div>
      </div>
      {/* tabs start */}
     <Tabex></Tabex>
      {/* tabs end */}
    </div>
  );
};

export default AllProducts;
