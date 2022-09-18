import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function Auth() {
  // if (!localStorage.getItem("UserAdmin")) {
  //   return <Navigate to="/auth" replace />;
  // }
  return (
    <div>
      <Outlet />
    </div>
  );
}
