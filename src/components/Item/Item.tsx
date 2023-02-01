import { FC } from "react";
// import { useDispatch } from "react-redux";
// import { addReviewToCart, delReview } from "../../store/actions/review";
import "./Item.css";
import { useAppSelector } from "../../hooks/hook";

const Item: FC = () => {
  // const dispatch = useDispatch();
  const reviews = useAppSelector(state => state.review.reviews);

  return (
    <>
      {reviews?.map((item: any) => (
        <div className="item" key={item.id}>
          <img
            className="item__img"
            src={item.imgSrc ? item.imgSrc : "img/erdinger-wiesbier.jpg"}
            alt="item-img"
          />
          <h2 className="item__header">{item.header}</h2>
          <p className="item__review">{item.text}</p>
          <button
            className="item__buy"
            // onClick={() => dispatch(addReviewToCart(item))}
          >
            Buy Item
          </button>
          <button
            className="item__del"
            // onClick={() => dispatch(delReview(item.uuid))}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default Item;
