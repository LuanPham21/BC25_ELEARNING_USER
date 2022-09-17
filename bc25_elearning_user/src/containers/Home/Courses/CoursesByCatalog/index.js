import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Pagination } from "antd";
import { Container, Row, Col } from "reactstrap";
import { actGetCoursesByCatalog } from "../reducer/actions";
import "./Catalog-card.css";

const CoursesByCatalog = () => {
  const url = useLocation().search;
  const id = new URLSearchParams(url).get("id");
  const dataCBC = useSelector((state) => state.coursesByCatalogReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCoursesByCatalog(id));
  }, [id]);

  const renderCourses = () => {
    return dataCBC?.map((item, index) => {
      return (
        <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
          <div className="course__card">
            <div className="course__img">
              <img
                src={item.hinhAnh}
                alt={item.hinhAnh}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placeimg.com/420/320/tech/grayscale";
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
    <React.Fragment>
      <section style={{ padding: "40px 0" }}>
        <Container>
          <Row>{renderCourses()}</Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CoursesByCatalog;
