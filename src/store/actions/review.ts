import { ADD_REVIEW, DEL_REVIEW, ADD_TO_CART } from "../constants";
import { ReviewsActionTypes } from "../types";

export const addReview = (item: Object): ReviewsActionTypes => ({
  type: ADD_REVIEW,
  payload: item,
});

export const delReview = (item: number): ReviewsActionTypes => ({
  type: DEL_REVIEW,
  payload: item,
});

export const addReviewToCart = (item: Object): ReviewsActionTypes => ({
  type: ADD_TO_CART,
  payload: item,
});