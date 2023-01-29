import { combineReducers } from "redux";
import reviewReducer from "./reducers/review";

const rootReducer = combineReducers({
  review: reviewReducer,
});

export default rootReducer;