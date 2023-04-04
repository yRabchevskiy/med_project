import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const MainPage: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<>Home</>} />
        <Route path="/teem" element={<>Teem</>} />
      </Route>
    </Routes>
  );
};

export default React.memo(MainPage); 