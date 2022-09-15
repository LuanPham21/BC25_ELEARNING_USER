import { combineReducers } from "redux";
import listCoursesReducer from "containers/Home/HomePage/HomeMenu/reducer";
import searchCoursesReducer from "containers/Home/Search/reducer";
import {
  catalogCoursesReducer,
  coursesByCatalogReducer,
} from "containers/Home/Courses/reducer";
import courseDetailsReducer from "containers/Home/CourseDetails/reducer";

const rootReducer = combineReducers({
  listCoursesReducer,
  searchCoursesReducer,
  catalogCoursesReducer,
  coursesByCatalogReducer,
  courseDetailsReducer,
});

export default rootReducer;
