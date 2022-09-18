import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actRegis = (user, navigate) => {
  return (dispatch) => {
    dispatch(actRegisterAuthRequest);
    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        //Check maLoaiNguoiDung
        dispatch(actRegisterAuthSuccess(result.data));

        //Lưu thông tin user xuống locaStorage
        localStorage.removeItem("UserAdmin", JSON.stringify(result.data));

        alert("Đăng kí thành công thành công");

        //Redirect to /admin
        // navigate("/auth/login", { replace: true });
      })
      .catch((error) => {
        dispatch(actRegisterAuthFailed(error));
      });
  };
};

export const actRegisterAuthRequest = () => {
  return {
    type: ActionType.REGISTER_AUTH_REQUEST,
  };
};

export const actRegisterAuthSuccess = (data) => {
  return {
    type: ActionType.REGISTER_AUTH_SUCCESS,
    payload: data,
  };
};

export const actRegisterAuthFailed = (data) => {
  return {
    type: ActionType.REGISTER_AUTH_FAILED,
    payload: data,
  };
};
