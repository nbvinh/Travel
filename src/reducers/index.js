import { combineReducers } from "redux";
import people from "./peopletest";
import cart from "./carttest";
import dataheader from "./dataheader";
import Promotion from "./Promotion";
import Schedule from "./Schedule";
const rootReducer = combineReducers({
  people,
  cart,
  dataheader,
  Promotion,
  Schedule 
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;