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
