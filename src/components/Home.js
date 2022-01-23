import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AnimationCanvas from "./Animation";
import styled from "styled-components";

const Container = styled.div`
  margin: 10%;
`;

function App() {
  return (
    <>
      <div className="anim">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <AnimationCanvas /> */}
          <NavBar />
          <Container>
            <Header />
          </Container>
        </Suspense>
      </div>
    </>
  );
}

export default App;
