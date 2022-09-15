import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

const actGetCatalogCourses = () => {
  return (dispatch) => {
    dispatch(actCatalogCoursesRequest());

    api
      .get("QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((res) => dispatch(actCatalogCoursesSuccess(res.data)))
      .catch((err) => dispatch(actCatalogCoursesFailed(err)));
  };
};

const actGetCoursesByCatalog = (id) => {
  return (dispatch) => {
    dispatch(actCoursesByCatalogRequest());

    api
      .get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`)
      .then((res) => dispatch(actCoursesByCatalogSuccess(res.data)))
      .catch((err) => dispatch(actCoursesByCatalogFailed(err)));
  };
};

const actCatalogCoursesRequest = () => {
  return {
    type: ActionType.CATALOG_COURSES_REQUEST,
  };
};

const actCatalogCoursesSuccess = (data) => {
  return {
    type: ActionType.CATALOG_COURSES_SUCCESS,
    payload: data,
  };
};

const actCatalogCoursesFailed = (error) => {
  return {
    type: ActionType.CATALOG_COURSES_FAILED,
    payload: error,
  };
};

const actCoursesByCatalogRequest = () => {
  return {
    type: ActionType.COURSES_BY_CATALOG_REQUEST,
  };
};

const actCoursesByCatalogSuccess = (data) => {
  return {
    type: ActionType.COURSES_BY_CATALOG_SUCCESS,
    payload: data,
  };
};

const actCoursesByCatalogFailed = (error) => {
  return {
    type: ActionType.COURSES_BY_CATALOG_FAILED,
    payload: error,
  };
};

export { actGetCatalogCourses, actGetCoursesByCatalog };
