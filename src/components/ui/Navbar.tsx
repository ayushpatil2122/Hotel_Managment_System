'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>


          <ul className="hidden md:flex gap-x-6 text-black">
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/menu">
                <p>Menu</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
