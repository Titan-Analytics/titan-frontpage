import "./App.css";
import { Suspense } from "react";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
