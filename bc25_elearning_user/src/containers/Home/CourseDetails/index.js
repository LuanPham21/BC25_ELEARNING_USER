import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actGetCourseDetails, actGetRegisCourse } from "./reducer/actions";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Modal } from "antd";
import General from "components/General";
import "./Course-details.css";
import RandomCourses from "components/RandomCourses";
import "../../Home/HomePage/HomeMenu/home-menu.css";

const CourseDetails = () => {
  const url = useLocation().search;
  const id = new URLSearchParams(url).get("id");
  const prop = useSelector((state) => state.regisCourseReducer.data);
  const dataDetails = useSelector((state) => state.courseDetailsReducer.data);
  const data = JSON.parse(localStorage.getItem("UserAdmin"));
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });

  const navigate = useNavigate();
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    dispatch(actGetCourseDetails(id));
  }, [id]);
  let arr = [];
  const newArr = [...arr, dataDetails];
  const handleOk = () => {
    setVisible(false);
    dispatch(actGetRegisCourse(state, navigate));
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = (maKhoaHoc) => {
    setState({
      maKhoaHoc: maKhoaHoc.maKhoaHoc,
      taiKhoan: data.taiKhoan,
    });
    setVisible(true);
    setModalText(`Bạn có chắc muốn đăng kí khoá học ${maKhoaHoc.tenKhoaHoc}`);
  };

  const renderCourseDetails = () => {
    return (
      <React.Fragment>
        <Col lg="6" md="6" sm="6">
          <img
            src={newArr[0]?.hinhAnh}
            alt={newArr[0]?.hinhAnh}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placeimg.com/420/320/tech/grayscale";
            }}
            className="w-100"
          />
        </Col>

        <Col lg="6" md="6" sm="6">
          <div className="detail__content">
            <h2>{newArr[0]?.tenKhoaHoc}</h2>

            <div className="detail__creator d-flex gap-3 align-items-center ">
              <div className="creator__img">
                <img
                  src="https://placeimg.com/420/320/tech/grayscale"
                  alt="https://placeimg.com/420/320/tech/grayscale"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placeimg.com/420/320/tech/grayscale";
                  }}
                  className="w-100"
                />
              </div>

              <div className="creator__detail ml-3">
                <p>Tạo bởi</p>
                <h6>{newArr[0]?.nguoiTao?.hoTen}</h6>
              </div>
            </div>

            <div className="creator__info-wrapper d-flex gap-1">
              <div className="creator__info w-100 ">
                <div className="my-1">
                  <h6>
                    Khóa học:{" "}
                    <span>{newArr[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
                  </h6>
                  <div className="d-flex align-items-center my-2">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <span>({newArr[0]?.luotXem})</span>
                  </div>
                  <h6>
                    Số lượng học viên: <span>{newArr[0]?.soLuongHocVien}</span>
                  </h6>
                </div>
              </div>
            </div>
            <p className="mt-3 text-white">Mô tả: </p>
            <p className="mb-4 desc">{newArr[0]?.moTa}</p>

            <Button
              className="w-100"
              type="primary"
              size="large"
              onClick={() => showModal(newArr[0])}
            >
              Đăng ký
            </Button>
          </div>
        </Col>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <General title={"Chi tiết khóa học"} />
      <section>
        <Container>
          <Row>{renderCourseDetails()}</Row>
        </Container>
      </section>
      <RandomCourses />
      <Modal
        title="Đăng kí khoá học"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Đóng"
        okText="Đồng ý"
      >
        <p>{modalText}</p>
      </Modal>
    </React.Fragment>
  );
};

export default CourseDetails;
