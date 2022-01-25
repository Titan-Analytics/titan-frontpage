import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Context from "./Context";
import Solution from "./Solution";
const TransparencyContainer = styled.div`
  margin: 8%;
  padding: 2%;
`;

const InfoCard = styled.div`
  background: white;
  margin: 0 auto;
  height: 100vh;
`;

const Section = styled.div`
  margin: 0 auto;
  height: 100vh;
`;

function Home() {
  return (
    <>
      <div className="anim">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      </div>
      <Section>
        <NavBar />
        <TransparencyContainer>
          <Header />
        </TransparencyContainer>
      </Section>
      <Context />
      <Solution />
    </>
  );
}

export default Home;
