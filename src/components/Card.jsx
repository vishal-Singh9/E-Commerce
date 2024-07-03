import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="card">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-description">{product.description}</p>
          <p className="card-price">Price: ${product.price}</p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          
        </div>
      </div>
    </>
  );
};

export default Card;
