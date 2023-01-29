import { ADD_REVIEW, DEL_REVIEW, ADD_TO_CART } from "./constants";

// reviews

export interface IReviewsState {
  reviews: Array<Object>,
  cart: Array<Object>,
}

interface IAddReview {
  type: typeof ADD_REVIEW;
  payload: Object;
}

interface IDelReview {
  type: typeof DEL_REVIEW;
  payload: number;
}

interface IAddToCart {
  type: typeof ADD_TO_CART;
  payload: Object;
}

export type ReviewsActionTypes = IAddReview | IDelReview | IAddToCart;
