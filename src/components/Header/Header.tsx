import React, { useState } from "react";
import "./Header.css";
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

function Header() {
  // BsFillCartCheckFill
  const [cartIcon, setCartIcon] = useState<boolean>(false);
  const cartItems = useSelector((state: any) => state.review.cart);

  function addToCartHandler() {
    setCartIcon(prev => !prev);
  }

  console.log(cartItems);
  

  return (
    <div className="header">
      <nav className="menu">
        <ul>
          <li>Menu-link1</li>
          <li>Menu-link2</li>
          <li>Menu-link3</li>
        </ul>
      </nav>
      <div className="cart" onClick={addToCartHandler}>
        {cartIcon ? (
          <BsFillCartCheckFill className="cart__icon" />
        ) : (
          <BsFillCartFill className="cart__icon" />
        )}
      </div>
    </div>
  );
}

export default Header;
