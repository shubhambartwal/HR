import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Pages/Landing";
const  Dashboard=React.lazy(()=>import( "./Pages/Dashboard")) ;
//use useNavigate hook

const App = () => {
    
  return (
    <div>
    
    <BrowserRouter>
   < AppRouting/>
      <Routes>
        <Route path="/" element={<Suspense fallback={"...loading"}><Landing /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};
//useNavigate will always inside the BrowserRouter

export default App;
function AppRouting () {
    const navigate= useNavigate();
  return (
    <div><button onClick={()=>navigate('/')}>Landing</button>
    <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
    </div>
  )
}


