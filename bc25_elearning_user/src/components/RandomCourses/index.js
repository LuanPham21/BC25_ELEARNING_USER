import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actGetListCourses } from "containers/Home/HomePage/HomeMenu/reducer/actions";

const RandomCourses = () => {
  const dataList = useSelector((state) => state.listCoursesReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetListCourses());
  }, []);

  const renderCourses = () => {
    return dataList
      ?.sort(() => Math.random() - Math.random())
      .slice(0, 4)
      .map((item, index) => {
        return (
          <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
            <div className="course__card">
              <div className="course__img">
                <img
                  src={item.hinhAnh}
                  alt={item.hinhAnh}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placeimg.com/420/320/tech/grayscale";
                  }}
                  className="w-100"
                />
              </div>

              <div className="course__content">
                <h5 className="course__title">
                  <Link to="/courses">{item.tenKhoaHoc}</Link>
                </h5>

                <div className="creator__info-wrapper d-flex gap-1">
                  <div className="creator__info w-100 ">
                    <div className="my-1">
                      <h6>
                        Khóa học:{" "}
                        <span>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
                      </h6>
                      <div className="d-flex align-items-center mt-2">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <span>({item.luotXem})</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-end">
                  <Button
                    className="mt-2"
                    type="primary"
                    size="default"
                    href={`/course-detail?id=${item.maKhoaHoc}`}
                  >
                    Đăng ký
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        );
      });
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-2">
            <div className="courses__top d-flex align-items-center justify-content-between ">
              <h3>Danh sách ngẫu nhiên</h3>
            </div>
          </Col>
        </Row>
        <Row>{renderCourses()}</Row>
      </Container>
    </section>
  );
};

export default RandomCourses;
