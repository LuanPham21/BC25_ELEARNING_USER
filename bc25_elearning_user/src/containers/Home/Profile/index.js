import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, InputNumber, Select, Typography } from "antd";
import { useFormik } from "formik";
import Loader from "components/Loader";
import TabPaneS from "./tabpane/TabPane";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams, Navigate } from "react-router-dom";
import { actProfileMovie, actEditProfileMovie } from "./reducer/action";

export default function Profile() {
  const loading = useSelector((state) => state.profileReducer.loading);
  const data = useSelector((state) => state.profileReducer.data);
  const prop = useSelector((state) => state.editProfileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actProfileMovie(flag.taiKhoan));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: data?.taiKhoan,
      matKhau: data?.matKhau,
      email: data?.email,
      soDt: data?.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: data?.maLoaiNguoiDung,
      hoTen: data?.hoTen,
      thongTinDatVe: data?.thongTinDatVe,
    },
  });

  if (loading) return <Loader />;

  if (!localStorage.getItem("UserAdmin")) {
    return <Navigate to="/" replace />;
  }

  const handleEditUser = () => {
    console.log(formik.values);
    dispatch(actEditProfileMovie(formik.values));
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const { Title } = Typography;
  const flag = JSON.parse(localStorage.getItem("UserAdmin"));

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} không được bỏ trống!",
    types: {
      email: "${label} không đúng định dạng email!",
      number: "${label} không đúng định dạng số!",
    },
    number: {
      range: "${label} phải từ ${min} đến ${max} chữ số",
    },
  };

  const renderProfile = () => {
    return <TabPaneS profile={data} />;
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={handleEditUser}
      validateMessages={validateMessages}
      className="profile__form"
    >
      <Title className="text-center" level={3}>
        Thông tin người dùng
      </Title>
      {/* {renderNoti()} */}
      <Form.Item label="Tài khoản">
        <Input
          name="taiKhoan"
          onChange={formik.handleChange}
          value={formik.values.taiKhoan}
        />
      </Form.Item>
      <Form.Item label="Họ tên">
        <Input
          name="hoTen"
          onChange={formik.handleChange}
          value={formik.values.hoTen}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="soDt"
          onChange={formik.handleChange}
          value={formik.values.soDt}
        />
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input.Password
          name="matKhau"
          onChange={formik.handleChange}
          value={formik.values.matKhau}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Sửa tài khoản
        </Button>
        <Link to="/">
          <Button danger style={{ color: "#1890ff" }} type="text">
            Quay lại
          </Button>
        </Link>
      </Form.Item>
      {renderProfile()}
    </Form>
  );
}
