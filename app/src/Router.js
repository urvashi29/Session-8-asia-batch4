import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./module/Navbar/Navbar";

import Recipe from "./module/Recipe/Recipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
