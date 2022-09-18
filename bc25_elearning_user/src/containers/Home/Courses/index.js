import React from "react";

import General from "components/General";
import CatalogCourses from "./CatalogCourses";
import CoursesByCatalog from "./CoursesByCatalog";
import RandomCourses from "components/RandomCourses";

const Courses = () => {
  return (
    <React.Fragment>
      <General title={"Danh sách khóa học"} />
      <CatalogCourses />
      <CoursesByCatalog />
      <RandomCourses />
    </React.Fragment>
  );
};

export default Courses;
