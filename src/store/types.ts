import {
  ADD_REVIEW,
  DEL_REVIEW,
  ADD_TO_CART,
  SET_DARK_THEME,
  SET_REVIEWS,
  SET_LOADED,
} from "./constants";

// reviews

export interface RootState {
  review: IReviewsState;
}

export interface IReviewsState {
  reviews: Array<Object>;
  cart: Array<Object>;
  isLoaded: boolean;
  isDarkTheme: boolean;
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

interface ISetDarkTheme {
  type: typeof SET_DARK_THEME;
}

interface ISetReviews {
  type: typeof SET_REVIEWS;
  payload: Array<Object>;
}

interface IFetchReviews {
  type: typeof SET_LOADED,
  payload: boolean
}

export type ReviewsActionTypes =
  | IAddReview
  | IDelReview
  | IAddToCart
  | ISetDarkTheme
  | ISetReviews
  | IFetchReviews;
