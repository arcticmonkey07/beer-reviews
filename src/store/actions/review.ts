import { isTemplateSpan } from "typescript";
import {
  ADD_REVIEW,
  DEL_REVIEW,
  ADD_TO_CART,
  SET_DARK_THEME,
  SET_REVIEWS,
  SET_LOADED,
} from "../constants";
import { ReviewsActionTypes } from "../types";
import { getReviews } from './../../data/request';

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

export const setDarkTheme = (): ReviewsActionTypes => ({
  type: SET_DARK_THEME,
});

export const fetchReviews = () => (dispatch: any) => {
  dispatch({
    type: SET_LOADED,
    payload: true,
  });

  getReviews().then((data) => {
    dispatch(setReviews(data));
    console.log(data);
  });
};

export const setReviews = (items: Array<Object>): ReviewsActionTypes => ({
  type: SET_REVIEWS,
  payload: items,
});
