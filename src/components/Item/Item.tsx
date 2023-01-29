import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviewToCart, delReview } from "../../store/actions/review";
import "./Item.css";

type PropsType = {
  reviews: Array<Object>;
};

const Item = ({ reviews }: PropsType) => {
  const dispatch = useDispatch();

  return (
    <>
      {reviews?.map((item: any) => (
        <div className="item item-container" key={item.id}>
          <img
            className="item__img"
            src={item.imgSrc ? item.imgSrc : "img/erdinger-wiesbier.jpg"}
            alt="item-img"
          />
          <h2 className="item__header">{item.header}</h2>
          <p className="item__review">{item.text}</p>
          <button
            className="item__buy"
            onClick={() => dispatch(addReviewToCart(item))}
          >
            Buy Item
          </button>
          <button
            className="item__del"
            onClick={() => dispatch(delReview(item.id))}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default Item;
// img/erdinger-wiesbier.jpg"
