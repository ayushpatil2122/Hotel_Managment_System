'use client'
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const NavBarMenu = () => {
  return (
      <nav>
        <ul className="hidden md:flex gap-x-6 text-black justify-center items-center mb-10 mt-5">
          <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md'>
              <li>
                  <Link href="/menu">
                    <p>Thali</p>
                  </Link>
              </li>
          </div>
          <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md'>
              <li>
                <Link href="/menu/Biryani">
                  <p>Biryani</p>
                </Link>
              </li>
          </div>
          <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md  '>
            <li>
              <Link href="/menu/Roti">
                <p>Roti</p>
              </Link>
            </li>
          </div>
          <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md'>
            <li>
              <Link href="/menu/Veg_Special">
                <p>Veg Special</p>
              </Link>
            </li>
          </div>
          <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md'>
            <li>
              <Link href="/menu/cart">
                <p>Cart</p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>

  );
};

export default NavBarMenu;
