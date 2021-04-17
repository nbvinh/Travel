import { combineReducers } from "redux";
import people from "./peopletest";
import PopularPlace from "./PopularPlace";
import dataheader from "./dataheader";
import Promotion from "./Promotion";
import Schedule from "./Schedule";
import Experience from "./Experience";
import Hotel from "./Hotel";
import DecemberDestination from "./DecemberDestination";
import Review from "./Review";
import Follow from "./Follow";
import Notification from "./Notification";
import MySchedule from "./MySchedule";
import Search from "./Search";
import Suggestion from "./Suggestion";
import CreateSchedules from "./CreateSchedules";
const rootReducer = combineReducers({
  people,
  PopularPlace,
  dataheader,
  Promotion,
  Schedule,
  Experience,
  Hotel,
  DecemberDestination,
  Review,
  Follow,
  Notification,
  MySchedule,
  Search,
  Suggestion,
  CreateSchedules,
});

export default rootReducer;