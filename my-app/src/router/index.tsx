import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
      </Routes>
    </div>
  );
};
