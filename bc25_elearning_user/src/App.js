import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { renderRoutes } from "./routes";
import { Suspense } from "react";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
