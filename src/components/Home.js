import { Suspense } from "react";
import NavBar from "./NavBar";
import AnimationCanvas from "./Animation";
function App() {
  return (
    <>
      <div className="anim">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <AnimationCanvas /> */}
        </Suspense>
      </div>
      <NavBar />
    </>
  );
}

export default App;
