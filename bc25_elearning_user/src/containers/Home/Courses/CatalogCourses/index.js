import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actGetCatalogCourses } from "../reducer/actions";

const CatalogCourses = () => {
  const dataCatalog = useSelector((state) => state.catalogCoursesReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCatalogCourses());
  }, []);

  return (
    <React.Fragment>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-2">
              <div className="courses__top d-flex align-items-center justify-content-between ">
                <div>
                  <h3>Khóa học</h3>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Danh mục khóa học
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {dataCatalog?.map((item, index) => (
                      <Link
                        className="dropdown-item"
                        to={`/courses?id=${item.maDanhMuc}`}
                        key={index}
                      >
                        {item.tenDanhMuc}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CatalogCourses;
