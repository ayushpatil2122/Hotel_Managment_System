"use client";
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {app} from '@/app/config'
import DisplayCartItems from '@/components/DisplayCartItems';
 

async function featchDataFromFireBase() {
  try {
    const firestore = getFirestore(app); // Assuming `app` is your Firebase app instance
    const rotiCollectionRef = collection(firestore, 'cart');
    const querySnapshot = await getDocs(rotiCollectionRef);
    const cartData = [];
    
    querySnapshot.forEach((doc) => {
      cartData.push(doc.data());
    });
    
    return cartData;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    throw error; // Propagate the error for handling outside of this function
  }
}

function page() {
  const [userData, setuserData] = useState([]);

  useEffect (() => {
    async function fetchData(){
      const data = await featchDataFromFireBase();
      setuserData(data);
    }
    fetchData();
  }, [])

  return (
    <div>
      <DisplayCartItems items={userData} />
    </div>
  )
}

export default page
