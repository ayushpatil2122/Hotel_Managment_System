'use client'
import { app } from '@/app/config';
import DisplayItems from '@/components/DisplayItems';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

async function featchDataFromFireBase() {
  try {
    const firestore = getFirestore(app); // Assuming `app` is your Firebase app instance
    const rotiCollectionRef = collection(firestore, 'table1');
    const querySnapshot = await getDocs(rotiCollectionRef);
    const rotiData = [];
    
    querySnapshot.forEach((doc) => {
      rotiData.push(doc.data());
    });
    
    return rotiData;
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
    <div className='text-center'>
      Order on table 2
      <DisplayItems items={userData} />
    </div>
  )
}

export default page
