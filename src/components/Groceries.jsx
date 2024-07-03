import React, { useEffect, useState } from 'react';
import Card from './Card';

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/groceries')
      .then(response => response.json())
      .then(data => setGroceries(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      {groceries.map((grocerie) => (
        <Card key={grocerie.id} product={grocerie} />
      ))}
    </div>
  );
};

export default Groceries;
