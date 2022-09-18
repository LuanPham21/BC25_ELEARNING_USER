import { Tabs } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { actCancelRegistrationMovie } from "./../reducer/action";

const { TabPane } = Tabs;

const TabPaneS = (props) => {
  const prop = useSelector((state) => state.cancelRegistrationReducer.data);
  const data = props?.profile || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tabPosition, setTabPosition] = useState("left");
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });
  const handleOk = () => {
    dispatch(actCancelRegistrationMovie(state, navigate));
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = (khoaHoc) => {
    setState({
      maKhoaHoc: khoaHoc.maKhoaHoc,
      taiKhoan: data.taiKhoan,
    });
    console.log(state);
    setVisible(true);
    setModalText(
      `Bạn có chắc muốn huỷ ghi danh khoá học ${khoaHoc.tenKhoaHoc}`
    );
  };

  const flag = JSON.parse(localStorage.getItem("UserAdmin"));
  const renderLogo = () => {
    const info = data?.chiTietKhoaHocGhiDanh;

    return (
      <div className="container mx-auto mt-10 bg-white rounded-xl py-5">
        <Tabs tabPosition={tabPosition}>
          {info?.map((htr, index) => (
            <TabPane
              tab={
                <div className="flex items-center">
                  <div className="ml-4">{htr.tenKhoaHoc}</div>
                </div>
              }
              key={index}
            >
              <div className="flex flex-row ">
                <div className="ml-3">
                  <Typography.Link
                    className="ml-4"
                    onClick={() => showModal(htr)}
                  >
                    Huỷ Ghi Danh
                  </Typography.Link>
                </div>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  };
  return (
    <>
      <div className=" container mx-auto">{renderLogo()}</div>
      <Modal
        title="Huỷ ghi danh khoá học"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Đóng"
        okText="Đồng ý"
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default TabPaneS;
