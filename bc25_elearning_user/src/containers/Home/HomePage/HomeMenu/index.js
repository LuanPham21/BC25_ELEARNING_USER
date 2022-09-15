import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actGetListCourses } from "./reducer/actions";
import CourseCard from "../CourseCard/index";
import "./home-menu.css";

const HomeMenu = () => {
  const data = useSelector((state) => state.listCoursesReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListCourses());
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="courses__top d-flex align-items-center justify-content-between ">
              <h3>Khóa học</h3>
              <span>
                <Link to="/courses" className="d-flex">
                  <span>Xem khóa học</span>{" "}
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          {data?.slice(0, 8).map((item, index) => (
            <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
              <CourseCard key={index} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeMenu;
