import { FC, useState } from "react";
import "./Header.css";
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../../store/types";
// import { setDarkTheme } from "../../store/actions/review";

const Header: FC = () => {
  const dispatch = useDispatch();
  // const [cartIcon, setCartIcon] = useState<boolean>(false);
  // const cartItems = useSelector(({ review }: RootState) => review.cart);
  // const dark = useSelector(({ review }: RootState) => review.isDarkTheme);

  // function addToCartHandler() {
  //   setCartIcon((prev) => !prev);
  // }

  return (
    <div className="header">
      <nav className="menu">
        <ul>
          <li>Menu-link1</li>
          <li>Menu-link2</li>
          <li>Menu-link3</li>
        </ul>
      </nav>
      <div className="dark-theme">
        <input
          className="dark-theme__checkbox visually-hidden"
          type="checkbox"
          id="dark"
        />
        <label
          className="dark-theme__label"
          htmlFor="dark"
          // onClick={() => dispatch(setDarkTheme())}
        ></label>
      </div>
      {/* <div className="cart" onClick={addToCartHandler}>
        {cartIcon ? (
          <BsFillCartCheckFill className="cart__icon" />
        ) : (
          <BsFillCartFill className="cart__icon" />
        )}
        {cartItems.length ? (
          <span className="cart__amount">{cartItems.length}</span>
        ) : null}
      </div> */}
    </div>
  );
};

export default Header;
