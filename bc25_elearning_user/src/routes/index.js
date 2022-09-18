import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  //Home Page
  {
    path: "",
    element: lazy(() => import("./../containers/Home/")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../containers/Home/HomePage")),
      },
      {
        path: "profile",
        element: lazy(() => import("./../containers/Home/Profile")),
      },
      {
        path: "courses",
        element: lazy(() => import("../containers/Home/Courses")),
      },
      {
        path: "about",
        element: lazy(() => import("../containers/Home/About")),
      },
      {
        path: "contact",
        element: lazy(() => import("../containers/Home/Contact")),
      },
      {
        path: "search-course",
        element: lazy(() => import("../containers/Home/Search")),
      },
      {
        path: "course-detail",
        element: lazy(() => import("../containers/Home/CourseDetails")),
      },
    ],
  },
  // Auth Page
  {
    path: "auth",
    element: lazy(() => import("./../containers/AuthPage")),
    nested: [
      {
        path: "login",
        element: lazy(() => import("./../containers/AuthPage/LoginPage")),
      },
      {
        path: "register",
        element: lazy(() => import("./../containers/AuthPage/RegisPage")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={route.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export { renderRoutes };
