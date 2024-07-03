import React, { useState, useContext } from "react";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCartVisible, setCartVisible] = useState(false);
  const { getItemCount } = useContext(CartContext);
  const itemCount = getItemCount();

  return (
    <div className="nab">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            T A N N T R I M
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products/smartphones">
                  SmartPhones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products/menshirts">
                  Shirt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products/shoes">
                  Shoes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products/watches">
                  Watches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products/groceries">
                  Groceries
                </a>
              </li>
            </ul>
            <div>
              <button className="btn-view" onClick={() => setCartVisible(true)}>
                <FaShoppingCart />
                {itemCount > 0 && (
                  <span className="item-count">{itemCount}</span>
                )}
              </button>
              <Link
                to="/cart"
                className="nav-link"
                style={{ color: "black" }}
              ></Link>
              {isCartVisible && <Cart onClose={() => setCartVisible(false)} />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
