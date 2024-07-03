import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { RiCloseLine } from "react-icons/ri";
import "./Cart.css";

const Cart = ({ onClose }) => {
  const { getCart, removeItemFromCart, updateItemQuantity } = useContext(CartContext);
  const cart = getCart();
  const [selectedProduct, setSelectedProduct] = useState(null);


  const calculateTotalPrice = (items) => {
    return items.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className="cart-modal-container">
      <div className="cart-modal">
        <button onClick={onClose} className="close-button">
          <RiCloseLine />
        </button>
        <center><h1>Your Cart</h1></center>
        <hr />
        <div className="cart-content">
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "2.2rem" }}>No items in your cart.</p>
          ) : (
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index} className="cart-item">
                    <td onClick={() => setSelectedProduct(product)}>
                      <img src={product.thumbnail} alt={product.title} />
                      <h3>{product.title}</h3>
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            updateItemQuantity(product, product.quantity - 1)
                          }
                          disabled={product.quantity === 1}
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() =>
                            updateItemQuantity(product, product.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => removeItemFromCart(product)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {cart.length > 0 && (
          <div className="total-price">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>
      {selectedProduct && (
        <div className="product-modal-container">
          <div className="product-modal">
            <button onClick={() => setSelectedProduct(null)} className="close-button">
              <RiCloseLine />
            </button>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>Quantity: {selectedProduct.quantity}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
