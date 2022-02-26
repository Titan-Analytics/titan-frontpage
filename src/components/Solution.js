import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Landing/Hero";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = styled.div`
  margin: 0 auto;
  padding: 8%;
  background: linear-gradient(#000, #000, #000);
`;

const TextContainer = styled.div`
  margin-left: 8%;
  margin-right: 8%;
  width: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const DarkContainer = styled.div`
  flex: 1;
  margin-left: 0%;
  margin-top: 2%;
  padding: 2%;
  border-radius: 5px;
  border: 1px solid #776df5;
  align-items: center;
  font-size: 1.2em;
  &:hover {
    box-shadow: 1px -2px 38px 16px rgba(255, 255, 255, 0.09);
  }
`;
const LeftContainer = styled.div``;

const RightContainer = styled(LeftContainer)`
  margin-left: 30%;
  margin-right: 0%;
  border-radius: 24px 0px 0px 24px;
`;

function Solution() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <RightContainer>
            <Fade bottom>
              <div className="text-4xl lg:text-4xl md:text-5xl sm:text-4xl font-bold leading-normal text-white">
                <h1 id="context" className="text-right pr-3">
                  Problem and Solution
                </h1>
              </div>
              <DarkContainer>
                <div className="mt-sm">
                  <h2 className="text-l font-normal leading-normal mt-0 mb-2 text-white">
                    People have been making money in games for decades, but
                    there is a massive gap in the availability of modern
                    analytical platforms to suit the needs of
                    commercially-oriented gamers
                  </h2>
                  <h2 className="text-l font-normal leading-normal mt-0 mb-2 text-white">
                    Our analytics and insight platform arms players, guild
                    operators and metaverse entrepreneurs with the insights
                    needed to maximize their success, helping answer the
                    ultimate question:{" "}
                    <span className="text-lightpurple font-bold">
                      How do I best allocate my time and capital in order to
                      maximize returns?
                    </span>
                  </h2>
                </div>
              </DarkContainer>
            </Fade>
          </RightContainer>
        </Section>
      </Suspense>
    </>
  );
}

export default Solution;
