import { combineReducers } from "redux";
import people from "./peopletest";
import cart from "./carttest";

const rootReducer = combineReducers({
  people,
  cart
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;