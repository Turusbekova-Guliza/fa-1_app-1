import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import MainPage from "./pages/ManPage/MainPage";
import SalePage from "./pages/SalePage/SalePage";
import WomenPage from "./pages/WomenPage/WomenPage";
import Theme from "./components/Theme/Theme";

const App = () => {
  return (
    <div>
      <Theme />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="MainPage" element={<MainPage />} />
          <Route path="SalePage" element={<SalePage />} />
          <Route path="WomenPage" element={<WomenPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
