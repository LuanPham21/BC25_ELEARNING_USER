import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actGetCoursesSearch } from "./reducer/actions";
import General from "components/General";
import "./Search.css";

const columns = [
  {
    key: "course",
    render: (item) => (
      <Col lg="12" className="mb-4 d-flex ">
        <div className="course__card">
          <div className="course__img">
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              style={{ width: "250px", height: "100%", borderRadius: "5px" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placeimg.com/420/320/tech/grayscale";
              }}
            />
          </div>
        </div>
        <div className="course__content ml-5">
          <h5 className="course__title">{item.tenKhoaHoc}</h5>

          <div className="creator__info-wrapper d-flex gap-1">
            <div className="creator__info w-100 ">
              <div className="my-1">
                <h6>
                  Khóa học: <span>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
                </h6>
                <div className="d-flex align-items-center mt-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <span>({item.luotXem})</span>
                </div>
                <p className="desc my-0">Mô tả: </p>
                <p className="desc__content my-0">
                  {item.moTa.length > 200
                    ? item.moTa.slice(0, 200) + "..."
                    : item.moTa}
                </p>
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
      </Col>
    ),
  },
];

const Search = () => {
  const url = useLocation().search;
  const keyword = new URLSearchParams(url).get("keyword");
  const data = useSelector((state) => state.searchCoursesReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCoursesSearch(keyword));
  }, []);

  console.log(data);
  return (
    <React.Fragment>
      <General title="Kết quả tìm kiếm" />
      <section>
        <Container>
          <h4>
            Kết quả tìm kiếm: <span>"{keyword}"</span>
          </h4>
          <Row>
            <Col lg="12">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 6 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Search;
