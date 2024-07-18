'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {

  return (
    <div className="w-full h-96 bg-[#BF3100] text-white flex flex-col md:flex-row items-center justify-center">
      {/* <div className="hidden md:w-1/2 md:flex items-center justify-center">
        {/* <Image
          src="/assets/photo1.png"
          alt="Hotel Kolhapuri"
          width={500}
          height={400}
        /> */}
      {/* </div> 
    } */}

      <div className="text-center md:w-1/2">
        <h1 className="text-8xl font-extrabold mb-2 ">Hotel <br /> Kolhapuri</h1>
        <p className="text-1xl mb-4">Serving Authentic Maharashtrian Cuisine</p>
        <button className="relative bg-white text-[#8B0000] rounded-full px-7 py-4 text-lg font-semibold transition duration-300 overflow-hidden hover:bg-[#E23D28]  hover:border-white hover:text-white hover:border-2">
          <Link href="/menu">
            <h2>View Our Menu</h2>
          </Link>
        </button>
      </div>

    </div>
  );
};

export default HeroSection;
