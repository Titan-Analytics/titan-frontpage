import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = styled.div`
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 5%;
  background: #000;
`;
// background: repeating-linear-gradient(
//     to right,
//     #202123,
//     #202123 200px,
//     #313235 200px,
//     #313235 202px
//   );
const LeftContainer = styled.div`
  box-shadow: 0px -2px 18px 17px rgba(64, 64, 64, 0.3);
  -webkit-box-shadow: 0px -2px 18px 17px rgba(64, 64, 64, 0.3);
  -moz-box-shadow: 0px -2px 18px 17px rgba(64, 64, 64, 0.3);
  margin-top: 4.5rem;
  margin-right: 30%;
  padding: 5%;
  border-radius: 5px;
  border-radius: 0px 24px 24px 0px;
  background: #28045670;
`;

const RightContainer = styled(LeftContainer)`
  margin-left: 30%;
  margin-right: 0%;
  text-align: right;
  border-radius: 24px 0px 0px 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function Solution() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <LeftContainer>
            <Fade bottom>
              <div className="text-4xl lg:text-4xl md:text-5xl sm:text-4xl font-bold leading-normal text-white">
                <h1 id="context">Problem</h1>
              </div>
              <div className="mt-sm">
                <h2 className="text-l font-normal leading-normal mt-0 mb-2 text-white">
                  People have been making money in games for decades, but there
                  is a massive gap in the availability of modern analytical
                  platforms to suit the needs of commercially-oriented gamers
                </h2>
              </div>
            </Fade>
          </LeftContainer>
          <RightContainer>
            <Fade bottom>
              <div className="text-4xl lg:text-4xl md:text-5xl sm:text-4xl font-bold leading-normal text-white">
                <h1 id="context" className="text-white">
                  Solution
                </h1>
              </div>
              <div className="mt-sm">
                <h2 className="text-l font-normal leading-normal mt-0 mb-2 text-white">
                  Our analytics and insight platform arms players, guild
                  operators and metaverse entrepreneurs with the insights needed
                  to maximize their success, helping answer the ultimate
                  question:{" "}
                  <span className="text-lightpurple font-bold">
                    How do I best allocate my time and capital in order to
                    maximize returns?
                  </span>
                </h2>
              </div>
            </Fade>
          </RightContainer>
        </Section>
      </Suspense>
    </>
  );
}

export default Solution;
