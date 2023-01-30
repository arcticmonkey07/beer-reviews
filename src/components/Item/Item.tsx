import { useSelector, useDispatch } from "react-redux";
import { addReviewToCart, delReview } from "../../store/actions/review";
import "./Item.css";
import { RootState } from './../../store/types';

type PropsType = {
  reviews: Array<Object>;
};

const Item = ({ reviews }: PropsType) => {
  const dispatch = useDispatch();
  const dark = useSelector(({ review }: RootState) => review.isDarkTheme);
  
  return (
    <>
      {reviews?.map((item: any) => (
        <div className={`${"item"} ${dark ? "item-dark" : ""}`} key={item.uuid}>
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
            onClick={() => dispatch(delReview(item.uuid))}
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
