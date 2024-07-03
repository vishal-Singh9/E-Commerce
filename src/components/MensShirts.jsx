import React, { useEffect, useState } from 'react';
import Card from './Card';

const MensShirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shirts')
      .then(response => response.json())
      .then(data => setShirts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      {shirts.map((shirt) => (
        <Card key={shirt.id} product={shirt} />
      ))}
    </div>
  );
};

export default MensShirts;
