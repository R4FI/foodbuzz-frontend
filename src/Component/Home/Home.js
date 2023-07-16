import React from "react";
import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";
import Body from "../Body/Body";
import Footer from "../Fotter/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <AllProducts></AllProducts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
