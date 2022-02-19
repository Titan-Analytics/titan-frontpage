import "./App.css";
import React, { Suspense } from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Waitlist from "./pages/waitlist/Waitlist";
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="waitlist" element={<Waitlist />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
