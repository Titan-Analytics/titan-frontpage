import "./App.css";
import React, { Suspense } from "react";
import Home from "./pages/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Waitlist from "./pages/waitlist";
import Report from "./pages/report";
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="waitlist" element={<Waitlist />} />
            <Route path="report" element={<Report />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
