import React, { useEffect, useState } from 'react';
import Card from './Card';

const MensWatches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-watches')
      .then(response => response.json())
      .then(data => setWatches(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="products-container">
      {watches.map((watch) => (
        <Card key={watch.id} product={watch} />
      ))}
    </div>
  );
};

export default MensWatches;
