import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./course-card.css";
import { Button } from "antd";
import Modal from "../Modal/index";

const CourseCard = (props) => {
  const { item } = props;

  const [showModal, setShowModal] = useState(false);

  return (
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
          <span className="info__link" onClick={() => setShowModal(true)}>
            Mô tả
          </span>
          {showModal && <Modal setShowModal={setShowModal} item={item} />}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
