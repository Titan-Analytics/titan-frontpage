import { Suspense } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Context from "./Context";
import Solution from "./Solution";
import History from "./History";
import { 
  Box
} from "@chakra-ui/react";

const TransparencyContainer = styled.div`
  margin-left: 8%;
  margin-right: 8%;
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

const Image = styled.img`
  height: 7rem;
  margin: auto;
`;

const Image2 = styled.img`
  height: 400px;
  margin: auto;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
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
          <Hero />
        </TransparencyContainer>
      </Section>
      <FlexContainer>
        <Image src="solana.png" />
        <Image2 src="ignition.png" />
      </FlexContainer>
      <Context />
      <Solution />
      <History />
    </>
  );
}

export default Home;
