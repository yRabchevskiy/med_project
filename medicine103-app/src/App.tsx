import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import PriveteRoute from './Contexts/Auth/PriveteRoute';
import MainPage from './Pages/MainPage';
import { AuthProvider } from './Contexts/Auth/authContext';

const App: React.FC<{}> = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <PriveteRoute>
              <MainPage />
            </PriveteRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
