// components/Footer.js
'use client'
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-8 flex justify-between items-center">
      <div className="text-center flex flex-col items-center"> 
        <div className="mb-4"> 
          <Image
            src='/assets/checkout.png'
            alt="Hotel Kolhapuri"
            width={50}
            height={50}
          />
        </div>
        <p className="font-bold">Get your favorite dishes delivered</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Order Now</button>
      </div>
      <div className="bg-red-500 p-4 rounded-md">
        <form>
          <label className="text-white block mb-2">Subscribe to our newsletter:</label>
          <div className="flex items-center">
            <input type="email" placeholder="Enter your email" className="bg-white p-2 rounded-l-md flex-1" />
            <button type="submit" className="bg-white text-red-500 px-4 py-2 rounded-r-md">Subscribe</button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
