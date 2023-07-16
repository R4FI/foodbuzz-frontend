/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Banner.css";
import imgfood from "../../Image/banner_image.jpg";
const Banner = () => {
  return (
    <div>
      <div className="conatiner flex lg:flex-row flex-col p-5 mt-10 maincontainer">
        <div className="mx-auto basis-1/3 mt-4">
          <h1 className="maintxtbanner">Delicious & Affordable</h1>
          <h3 className="bannerspan">Meals Near For You</h3>
          <p className="mt-10 text-black text-xl">
            Labore et dolor sanctus accusam lorem aliquyam, kasd duo clita justo
            gubergren ea elitr rebum. Sit ipsum kasd no eirmod.
          </p>
          <button className="btn1">Order Now</button>
        </div>

        <div className="mx-auto basis-1/2 mt-5">
          <img src={imgfood} alt="" className="imagebanner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
