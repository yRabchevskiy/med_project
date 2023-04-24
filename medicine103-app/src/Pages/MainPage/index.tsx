import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import HomePage from "../HomePage";
import MedicinePage from "../MedicinePage";

const MainPage: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default React.memo(MainPage); 