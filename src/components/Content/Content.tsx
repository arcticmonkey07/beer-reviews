import "./Content.css";
import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/actions/review";
import Item from "../Item/Item";
import { RootState } from "../../store/types";
import { db } from "../../data/firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";

const Content: FC = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(({ review }: RootState) => review.reviews);
  const dark = useSelector(({ review }: RootState) => review.isDarkTheme);
  const isLoaded = useSelector(({ review }: RootState) => review.isLoaded);
  const [img, setImg] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [body, setBody] = useState<string>("");

  if (dark) {
    document.body.style.backgroundColor = "gray";
  } else {
    document.body.style.backgroundColor = "#fff";
  }

  useEffect(() => {
    dispatch<any>(fetchReviews());
    console.log("render");
  }, []);

  const writeToDatabase = (e: any) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      uuid: uuid,
      imgSrc: img,
      header: header,
      text: body,
    });

    setImg("");
    setHeader("");
    setBody("");
  };

  // function addReviewHandler(e: any) {
  //   e.preventDefault();
  //   const review = {
  //     id: Date.now(),
  //     imgSrc: img,
  //     header: header,
  //     text: body,
  //   };

  //   dispatch(addReview(review));
  // }

  return (
    <div className={`${"content"} ${dark ? "content-dark" : ""}`}>
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
        <button type="submit" onClick={writeToDatabase}>
          Add Review
        </button>
      </form>
      <div className="item-container">
        {isLoaded ? <div>Loading...</div> : <Item reviews={reviews} />}
      </div>
    </div>
  );
};

export default Content;
