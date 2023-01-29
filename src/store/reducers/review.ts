import { ADD_REVIEW, DEL_REVIEW, ADD_TO_CART } from "../constants";
import { IReviewsState, ReviewsActionTypes } from "../types";

const initialState: IReviewsState = {
  reviews: [],
  cart: [],
};

function reviewReducer(state = initialState, action: ReviewsActionTypes) {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        // reviews: state.reviews.concat(action.payload),
        reviews: [...state.reviews, action.payload],
      };
    case DEL_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((item: any) => item.id !== action.payload),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state;
  }
}

export default reviewReducer;
