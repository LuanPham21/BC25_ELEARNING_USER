import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actProfileMovie = () => {
  return (dispatch) => {
    dispatch(actProfileRequest());
    api
      .post(`QuanLyNguoiDung/ThongTinNguoiDung`)
      .then(async (res) => await dispatch(actProfileSuccess(res.data)))
      .catch((err) => dispatch(actProfileFailed(err)));
  };
};

export const actCancelRegistrationMovie = (course, navigate) => {
  return (dispatch) => {
    dispatch(actCancelRegistrationRequest());
    api
      .post(`QuanLyKhoaHoc/HuyGhiDanh`, course)
      .then(async (res) => {
        await dispatch(actCancelRegistrationSuccess(res.data));

        navigate("/profile", { replace: true });
      })
      .catch((err) => dispatch(actCancelRegistrationFailed(err)));
  };
};

export const actEditProfileMovie = (data) => {
  return (dispatch) => {
    dispatch(actEditProfileRequest());
    api
      .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)
      .then(async (res) => {
        await dispatch(actEditProfileSuccess(res.data));
      })
      .catch((err) => dispatch(actEditProfileFailed(err)));
  };
};

const actProfileRequest = () => {
  return {
    type: ActionType.PROFILE_REQUEST,
  };
};

const actProfileSuccess = (data) => {
  return {
    type: ActionType.PROFILE_SUCCESS,
    payload: data,
  };
};

const actProfileFailed = (error) => {
  return {
    type: ActionType.PROFILE_FAILED,
    payload: error,
  };
};

const actCancelRegistrationRequest = () => {
  return {
    type: ActionType.CANCEL_REGISTRATION_REQUEST,
  };
};

const actCancelRegistrationSuccess = (data) => {
  return {
    type: ActionType.CANCEL_REGISTRATION_SUCCESS,
    payload: data,
  };
};

const actCancelRegistrationFailed = (error) => {
  return {
    type: ActionType.CANCEL_REGISTRATION_FAILED,
    payload: error,
  };
};

const actEditProfileRequest = () => {
  return {
    type: ActionType.EDIT_PROFILE_REQUEST,
  };
};

const actEditProfileSuccess = (data) => {
  return {
    type: ActionType.EDIT_PROFILE_SUCCESS,
    payload: data,
  };
};

const actEditProfileFailed = (error) => {
  return {
    type: ActionType.EDIT_PROFILE_FAILED,
    payload: error,
  };
};
