import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "./reducer/action";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const prop = useSelector((state) => state.LoginAuthReducer);
  console.log(prop);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(state));
  };

  const renderNoti = () => {
    const { error } = prop;
    return (
      error && <div className="alert alert-danger">{error.response.data}</div>
    );
  };
  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{ width: "380px", position: "fixed", top: "20%" }}
        className="text-center mb-0"
      >
        <Card.Header style={{ fontSize: "22px" }}>Đăng nhập</Card.Header>
        <Card.Body>
          {renderNoti()}
          <form onSubmit={handleLogin}>
            <div>
              <Form.Control
                className="mb-2"
                minLength="3"
                placeholder="Tài khoản"
                type="text"
                name="taiKhoan"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Control
                minLength="3"
                className="mb-2"
                placeholder="Mật khẩu"
                type="password"
                name="matKhau"
                onChange={handleChange}
              />
            </div>
            <div>
              <Button type="submit" variant="outline-primary">
                Đăng nhập
              </Button>
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div>
            <span>Bạn chưa có tài khoản </span>
            <Link to="/auth/register">
              <Button>Đăng kí</Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
