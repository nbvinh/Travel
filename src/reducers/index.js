import { combineReducers } from "redux";
import people from "./peopletest";
import PopularPlace from "./PopularPlace";
import dataheader from "./dataheader";
import Promotion from "./Promotion";
import Schedule from "./Schedule";
import Experience from "./Experience";
import Hotel from "./Hotel";
const rootReducer = combineReducers({
  people,
  PopularPlace,
  dataheader,
  Promotion,
  Schedule,
  Experience,
  Hotel, 
});

export default rootReducer;