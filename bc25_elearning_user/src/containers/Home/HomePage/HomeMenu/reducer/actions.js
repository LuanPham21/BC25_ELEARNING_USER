import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actGetListCourses = () => {
  return (dispatch) => {
    dispatch(actListCoursesRequest());

    api
      .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      .then((res) => dispatch(actListCoursesSuccess(res.data)))
      .catch((err) => dispatch(actListCoursesFailed(err)));
  };
};

const actListCoursesRequest = () => {
  return {
    type: ActionType.LIST_COURSES_REQUEST,
  };
};

const actListCoursesSuccess = (data) => {
  return {
    type: ActionType.LIST_COURSES_SUCCESS,
    payload: data,
  };
};

const actListCoursesFailed = (error) => {
  return {
    type: ActionType.LIST_COURSES_FAILED,
    payload: error,
  };
};
