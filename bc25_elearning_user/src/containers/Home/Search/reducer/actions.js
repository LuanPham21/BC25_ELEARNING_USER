import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actGetCoursesSearch = (keyword) => {
  return (dispatch) => {
    dispatch(actSearchCoursesRequest());

    api
      .get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP01`)
      .then((res) => dispatch(actSearchCoursesSuccess(res.data)))
      .catch((err) => dispatch(actSearchCoursesFailed(err)));
  };
};

const actSearchCoursesRequest = () => {
  return {
    type: ActionType.SEARCH_COURSES_REQUEST,
  };
};

const actSearchCoursesSuccess = (data) => {
  return {
    type: ActionType.SEARCH_COURSES_SUCCESS,
    payload: data,
  };
};

const actSearchCoursesFailed = (error) => {
  return {
    type: ActionType.SEARCH_COURSES_FAILED,
    payload: error,
  };
};
