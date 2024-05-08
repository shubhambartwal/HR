import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Landing  from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
const App2forRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App2forRouting;
