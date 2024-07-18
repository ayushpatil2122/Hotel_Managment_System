import Link from 'next/link';
import React from 'react'

export default function NavbarDashboard() {
  return (
    <nav>
    <ul className="hidden md:flex gap-x-6 text-black justify-center items-center mb-10 mt-5">
      <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md'>
          <li>
              <Link href="/Dashboard/AddItems">
                <p>Add a items</p>
              </Link>
          </li>
      </div>
      <div className='hover:border-[#F5BB00] hover:border-2 pt-1 pl-3 pr-3 pb-1 rounded-md'>
          <li>
            <Link href="/Dashboard/SeeOrder">
              <p>See The Order</p>
            </Link>
          </li>
      </div>
    </ul>
  </nav>
  )
}
