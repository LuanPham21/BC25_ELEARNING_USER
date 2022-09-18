import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actGetCourseDetails = (id) => {
  return (dispatch) => {
    dispatch(actCourseDetailsRequest());

    api
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .then((res) => dispatch(actCourseDetailsSuccess(res.data)))
      .catch((err) => dispatch(actCourseDetailsFailed(err)));
  };
};

export const actGetRegisCourse = (data, navigate) => {
  return (dispatch) => {
    dispatch(actRegisCourseRequest());

    api
      .post(`QuanLyKhoaHoc/DangKyKhoaHoc`, data)
      .then((res) => {
        dispatch(actRegisCourseSuccess(res.data));
        navigate("/", { replace: true });
      })
      .catch((err) => dispatch(actRegisCourseFailed(err)));
  };
};

const actCourseDetailsRequest = () => {
  return {
    type: ActionType.COURSE_DETAILS_REQUEST,
  };
};

const actCourseDetailsSuccess = (data) => {
  return {
    type: ActionType.COURSE_DETAILS_SUCCESS,
    payload: data,
  };
};

const actCourseDetailsFailed = (error) => {
  return {
    type: ActionType.COURSE_DETAILS_FAILED,
    payload: error,
  };
};

const actRegisCourseRequest = () => {
  return {
    type: ActionType.REGIS_COURSE_REQUEST,
  };
};

const actRegisCourseSuccess = (data) => {
  return {
    type: ActionType.REGIS_COURSE_SUCCESS,
    payload: data,
  };
};

const actRegisCourseFailed = (error) => {
  return {
    type: ActionType.REGIS_COURSE_FAILED,
    payload: error,
  };
};
