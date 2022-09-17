import React from "react";
import "./Video-section.css";
import { Button } from "antd";

const VideoSection = () => {
  return (
    <section className="video">
      <div className="video__title">
        <h2>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Button className="mr-5" type="primary" size="large" href="/courses">
          Danh sách khóa học
        </Button>
        <Button type="primary" size="large">
          Tư vấn học tập
        </Button>
      </div>
      <div className="video__content">
        <video src="./assets/video.mp4" loop muted autoPlay></video>
      </div>
    </section>
  );
};

export default VideoSection;
