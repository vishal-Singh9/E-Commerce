import React, { useEffect, useState } from 'react';
import Card from './Card';

const SmartPhone = () => {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(response => response.json())
      .then(data => setSmartphones(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      {smartphones.map((smartphone) => (
        <Card key={smartphone.id} product={smartphone} />
      ))}
    </div>
  );
};

export default SmartPhone;
