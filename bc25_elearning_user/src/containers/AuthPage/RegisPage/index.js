import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actRegis } from "./reducer/action";
import { useNavigate, Link } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

export default function RegisPage() {
  const prop = useSelector((state) => state.RegisAuthReducer);
  console.log(prop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GPO1",
    hoTen: "",
  });
  console.log(state);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleRegis = (event) => {
    event.preventDefault();
    dispatch(actRegis(state, navigate));
  };
  const { error } = prop;
  console.log({ error });

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
        <Card.Header style={{ fontSize: "22px" }}>Đăng kí</Card.Header>
        <Card.Body>
          {renderNoti()}
          <form onSubmit={handleRegis}>
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
              <Form.Control
                minLength="3"
                className="mb-2"
                placeholder="Họ tên"
                type="text"
                name="hoTen"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Control
                minLength="3"
                className="mb-2"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Control
                minLength="8"
                className="mb-2"
                placeholder="Số điện thoại"
                type="number"
                name="soDt"
                onChange={handleChange}
              />
            </div>
            <div>
              <Button type="submit" variant="outline-primary">
                Đăng kí
              </Button>
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div>
            <span>Bạn đã có tài khoản </span>
            <Link to="/auth/login">
              <Button>Đăng nhập</Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
