import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;