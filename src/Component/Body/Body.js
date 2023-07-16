import React from "react";
import "./Body.css";
import img2 from "../../Image/body_image2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Body = () => {
  return (
    <div>
      <div className="conatiner flex lg:flex-row flex-col p-5 mt-10">
        <div className="mx-auto basis-1/2 mt-5" data-aos="fade-right" data-aos-duration="3000">
          <img src={img2} alt="" className="imagebanner" />
        </div>

        <div className="mx-auto basis-1/3 mt-4">
          <h1 className="maintxtbanner"  data-aos="fade-left" data-aos-duration="3000"> We've been serving for</h1>
          <h2 className="bodyspan text-center"> over 5 years.</h2>
          <p className="text-black text-lg mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.  
            </p>
            <br/>

          <p className="text-black text-lg mt-5">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        <button className="btn1"  data-aos="fade-up" data-aos-duration="1000">Latest Offer</button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Body;
