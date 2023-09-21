import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";
import TreeLanding from "../components/Landing/TreeLand";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={`/second`} element={<LandingPage />} />
        <Route path={`/`} element={<TreeLanding />} />
      </Routes>
    </div>
  );
};
