import { combineReducers } from "redux";
import RegisAuthReducer from "containers/AuthPage/RegisPage/reducer";
import LoginAuthReducer from "containers/AuthPage/LoginPage/reducer";
import {
  profileReducer,
  cancelRegistrationReducer,
  editProfileReducer,
} from "containers/Home/Profile/reducer";
import listCoursesReducer from "containers/Home/HomePage/HomeMenu/reducer";
import searchCoursesReducer from "containers/Home/Search/reducer";
import {
  catalogCoursesReducer,
  coursesByCatalogReducer,
} from "containers/Home/Courses/reducer";
import {
  courseDetailsReducer,
  regisCourseReducer,
} from "containers/Home/CourseDetails/reducer";

const rootReducer = combineReducers({
  RegisAuthReducer,
  LoginAuthReducer,
  profileReducer,
  cancelRegistrationReducer,
  editProfileReducer,
  listCoursesReducer,
  searchCoursesReducer,
  catalogCoursesReducer,
  coursesByCatalogReducer,
  courseDetailsReducer,
  regisCourseReducer,
});

export default rootReducer;
