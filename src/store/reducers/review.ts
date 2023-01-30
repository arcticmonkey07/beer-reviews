import {
  ADD_REVIEW,
  DEL_REVIEW,
  ADD_TO_CART,
  SET_DARK_THEME,
  SET_REVIEWS,
  SET_LOADED,
} from "../constants";
import { IReviewsState, ReviewsActionTypes } from "../types";
import { remove, ref } from 'firebase/database';
import { db } from '../../data/firebase';

const initialState: IReviewsState = {
  reviews: [],
  cart: [],
  isLoaded: false,
  isDarkTheme: true,
};

function reviewReducer(state = initialState, action: ReviewsActionTypes) {
  switch (action.type) {
    case SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isLoaded: false,
      };
    case SET_LOADED: 
      return {
        ...state,
        isLoaded: action.payload,
      }
    case ADD_REVIEW:
      return {
        ...state,
        // reviews: state.reviews.concat(action.payload),
        reviews: [...state.reviews, action.payload],
      };
    case DEL_REVIEW:
      remove(ref(db, `/${action.payload}`));
      return {
        ...state,
        reviews: [...state.reviews],
        // reviews: state.reviews.filter(
        //   (item: any) => item.id !== action.payload
        // ),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case SET_DARK_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
}

export default reviewReducer;
