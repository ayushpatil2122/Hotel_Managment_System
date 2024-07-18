import React, { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { db } from '@/app/config';
import { addDoc, collection } from 'firebase/firestore';

async function addDataToFirestore(items, selectedTable) {
  try {
    for (const item of items) {
      const itemsRef = collection(db, selectedTable); // Create subcollection for items
      const docRef = await addDoc(itemsRef, item);
      console.log("Document written to database with ID:", docRef.id);
    }
    return true;
  } catch (error) {
    console.error("Error adding documents:", error);
    return false;
  }
}


const DisplayCartItems = ({ items }) => {
  const [selectedTable, setSelectedTable] = useState('');

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleSubmit = async (items) => {
    const added = await addDataToFirestore(items, selectedTable);
    if (added) {
      alert("Item added to cart successfully!");
    } else {
      alert("Failed to add item to cart. Please try again later.");
    }
  };
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="bg-white shadow-md rounded-md">
            <CardHeader className="bg-gray-200 p-4 rounded-t-md items-center">
              <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
              <CardDescription className="text-sm">{item.price}</CardDescription>
            </CardHeader>
            <Button>
              Remove from cart
            </Button>
          </Card>
        ))}
        
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <label htmlFor="tableSelect" className="mr-2">Select Table:</label>
            <select
              id="tableSelect"
              value={selectedTable}
              onChange={handleTableChange}
              className="px-2 py-1 border border-gray-300 rounded-md"
            >
              <option value="">Select Table</option>
              <option value="table1">Table 1</option>
              <option value="table2">Table 2</option>
              <option value="table3">Table 3</option>
              <option value="table4">Table 4</option>
            </select>
          </div>
          <Button
            onClick={() => handleSubmit(items)}
            disabled={!selectedTable}
            className={`px-4 py-2 rounded-md ${selectedTable ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Order Now
          </Button>
        </div>
      </div>
  
  );
};
export default DisplayCartItems