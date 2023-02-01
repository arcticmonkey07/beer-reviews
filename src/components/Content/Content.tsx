import "./Content.css";
import { FC, useState, useEffect } from "react";
import { fetchReviews } from "../../store/reviewSlice";
import Item from "../Item/Item";
import { useAppDispatch } from './../../hooks/hook';

const Content: FC = () => {
  const dispatch = useAppDispatch();
  // const dark = useSelector(({ review }: RootState) => review.isDarkTheme);
  // const isLoaded = useSelector(({ review }: RootState) => review.isLoaded);
  const [img, setImg] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [body, setBody] = useState<string>("");

  // if (dark) {
  //   document.body.style.backgroundColor = "gray";
  // } else {
  //   document.body.style.backgroundColor = "#fff";
  // }

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  // const writeToDatabase = (e: any) => {
  //   e.preventDefault();
  //   const uuid = uid();
  //   set(ref(db, `/${uuid}`), {
  //     uuid: uuid,
  //     imgSrc: img,
  //     header: header,
  //     text: body,
  //   });

  //   setImg("");
  //   setHeader("");
  //   setBody("");
  // };

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
    <div className="content">
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
        <button type="submit">
          Add Review
        </button>
      </form>
      <div className="item-container">
        <Item />
      </div>
    </div>
  );
};

export default Content;
