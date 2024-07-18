'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SpecialsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Specials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F5BB00] p-6  shadow-md flex flex-col items-center rounded-2xl	">
            <div className="mb-4">
              <Image
                src="/assets/veg icon.png"
                alt="Veg Special Logo"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              <Link
                href={'menu/Veg_Special'}
              >
                Veg Special
              </Link>
              
            </h3>
            <p className="text-black-600">
              Delicious vegetarian dishes prepared with fresh ingredients.
            </p>
          </div>

          <div className="bg-[#F5BB00] p-6  shadow-md flex flex-col items-center rounded-2xl">
            <div className="mb-4">
              <Image
                src="/assets/non-veg.png"
                alt="Non-Veg Special Logo"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Non-Veg Special</h3>
            <p className="text-black-600">
              Savor the flavors of our non-vegetarian specialties.
            </p>
          </div>

          <div className="bg-[#F5BB00] p-6  shadow-md flex flex-col items-center rounded-2xl">
            <div className="mb-4">
              <Image
                src="/assets/starter.png"
                alt="Starters Logo"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Starters</h3>
            <p className="text-black-600">
              Irresistible appetizers to kick off your dining experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialsSection;
