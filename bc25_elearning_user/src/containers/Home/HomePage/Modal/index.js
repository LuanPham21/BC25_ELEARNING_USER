import React from "react";

import "./modal.css";

import { Button } from "antd";

const Modal = ({ setShowModal, item }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">{item.tenKhoaHoc}</h6>
        <div className="modal__content">
          <h6>
            Mã nhóm: <span>{item.maNhom}</span>
          </h6>
          <h6>
            Ngày tạo: <span>{item.ngayTao}</span>
          </h6>
          <h6>
            Tác giả: <span>{item.nguoiTao.hoTen}</span>
          </h6>
          <h6>
            Mô tả:{" "}
            <span>
              {item.moTa.length > 500
                ? item.moTa.slice(0, 500) + "..."
                : item.moTa}
            </span>
          </h6>
        </div>
        <Button className="mt-3" type="primary" size="default" href="/courses">
          Xem khóa học
        </Button>
      </div>
    </div>
  );
};

export default Modal;
