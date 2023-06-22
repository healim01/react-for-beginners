import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Detail from "./routes/Detail";
import Home from "./routes/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/article/:id" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;