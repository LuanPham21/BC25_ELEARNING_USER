import React from "react";
import Count from "./Count";
import HomeMenu from "./HomeMenu";
import HomeSection from "./HomeSection";
import Roadmap from "./Roadmap";
import VideoSection from "./VideoSection";

const Homepage = () => {
  return (
    <React.Fragment>
      <HomeSection />
      <HomeMenu />
      <Count />
      <VideoSection />
      <Roadmap />
    </React.Fragment>
  );
};

export default Homepage;
