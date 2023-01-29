import "./Content.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../store/actions/review";
import Item from "../Item/Item";

function Content() {
  const dispatch = useDispatch();
  const reviews = useSelector((state: any) => state.review.reviews);
  const [img, setImg] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [body, setBody] = useState<string>("");

  function addReviewHandler(e: any) {
    e.preventDefault();
    const review = {
      id: Date.now(),
      imgSrc: img,
      header: header,
      text: body,
    };

    dispatch(addReview(review));
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="form">
          <input
            type="text"
            placeholder="img link"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            type="text"
            placeholder="header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <input
            type="text"
            placeholder="review"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit" onClick={addReviewHandler}>
            Add Review
          </button>
        </form>
        <div className="item-container">
          <Item reviews={reviews} />
        </div>
      </header>
    </div>
  );
}

export default Content;
