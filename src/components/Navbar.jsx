// Import necessary dependencies and components
'use client'
import Link from 'next/link';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../app/config';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null); // State to store user's mobile number

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Fetch additional user information such as mobile number
        const idTokenResult = await user.getIdTokenResult();
        if (idTokenResult.claims.phone_number) {
          setMobileNumber(idTokenResult.claims.phone_number);
        }
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">
              <h3>Hotel Kolhapuri</h3>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/menu">
                  <h3 className="hover:text-[#8B0000]">Menu</h3>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <h3 className="hover:text-[#8B0000]">About</h3>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <h3 className="hover:text-[#8B0000]">Contact</h3>
                </Link>
              </li>

              <li>
                <Link href="/Dashboard">
                  <h3 className="hover:text-[#8B0000]">Dashboard</h3>
                </Link>
              </li>
      
              {user ? (
                <li>
                  <Button onClick={handleLogout}>Logout</Button>
                </li>
              ) : (
                <li>
                  <Link href="/Login">
                    <h3 className="hover:text-[#8B0000]">Login</h3>
                  </Link>
                </li>
              )}

              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
