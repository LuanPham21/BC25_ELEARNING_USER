import { combineReducers } from "redux";
import RegisAuthReducer from "containers/AuthPage/RegisPage/reducer";
import LoginAuthReducer from "containers/AuthPage/LoginPage/reducer";
import {
  profileReducer,
  cancelRegistrationReducer,
  editProfileReducer,
} from "containers/Home/Profile/reducer";

const rootReducer = combineReducers({
  RegisAuthReducer,
  LoginAuthReducer,
  profileReducer,
  cancelRegistrationReducer,
  editProfileReducer,
});

export default rootReducer;
