import React, { useEffect, useState } from 'react';
import Card from './Card';

const MensShoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shoes')
      .then(response => response.json())
      .then(data => setShoes(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      {shoes.map((shoe) => (
        <Card key={shoe.id} product={shoe} />
      ))}
    </div>
  );
};

export default MensShoes;
