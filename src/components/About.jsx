
import React from 'react';

const About = () => {
  return (
    <div className="relative bg-cover bg-[#F5BB00] bg-center h-96" >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Fresh. Authentic. Maharashtrian.</h1>
          <p className="text-lg mb-8">Experience the Flavours of Maharashtra</p>
          <p className="text-lg">At Excuse Me, we pride ourselves on serving fresh and authentic Maharashtrian cuisine. Our menu includes a wide range of veg and non-veg dishes, Chinese specials, starters, and beverages. Whether you're a meat lover or a vegetarian, we have something for everyone. Come and experience the flavours of Maharashtra at Excuse Me Restaurant.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
