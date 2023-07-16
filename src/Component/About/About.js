import React from "react";
import videoOne from "../../Image/video/pexels-cottonbro-studio-3298229-2048x1080-25fps.mp4";
const About = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row gap-5">
        <div className="basis-1/2">
          <video
            class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
            autoplay controls
          >
            <source src={videoOne} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="basis-1/2">
          <h1 className="text-4xl font-extrabold">About Us</h1>
          <p className="text-lg mt-5">
            Beati incominciare di cominciamento a e noi coloro nondimeno avvien.
            Da sí sí essilio priegano santo forza in non, maravigliose né fuor
            facciamo e sua.At and from charms of and a seemed him he oer, ear days florid she seraphs come save ye aye..
            His heartless ee but and and his from a feel. Wrong tis almost hight sore say alone one, but that and whose woe 
            than grace sore lines soon. Companie long.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
