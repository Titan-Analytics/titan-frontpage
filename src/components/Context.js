import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
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
  background: black;
`;

const TextContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 8%;
  margin-right: 8%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const DarkContainer = styled.div`
  flex: 1;
  margin: 2%;

  padding: 2%;
  border-radius: 5px;
  background: #202123;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
`;

function Context() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <TextContainer>
            <Fade bottom>
              <div className="text-4xl lg:text-4xl md:text-5xl sm:text-4xl font-bold leading-normal text-white">
                <h1 id="context">Context</h1>
              </div>
              <div className="mt-sm">
                <h2 className="text-xl font-normal leading-normal mt-0 mb-2 text-white">
                  Blockchain gaming is facilitating a generational shift in
                  value from game producers to game players, and it’s driving
                  explosive adoption of a new generation of games.
                </h2>
              </div>
            </Fade>
            <Fade>
              <FlexContainer>
                <DarkContainer>
                  Traditional games greatly restrict players earning potential,
                  as game producers retain ownership over in-game assets, and
                  limit the ability of players to trade assets and in-game
                  currency for real world currency
                </DarkContainer>
                <DarkContainer>
                  Blockchain games eliminate these restrictions, allowing
                  players to purchase and hold in-game currency and assets (as
                  NFTs) in their private wallets, and trade them at will for
                  real-world currency
                </DarkContainer>
              </FlexContainer>
            </Fade>
          </TextContainer>
        </Section>
      </Suspense>
    </>
  );
}

export default Context;
