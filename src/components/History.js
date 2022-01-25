import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import NewsCard from "./NewsCard";
const Section = styled.div`
  margin: 0 auto;
  padding-top: 8%;
  padding-bottom: 5%;
  background: linear-gradient(#000, #000, #000);
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
  margin-top: 24px;
`;
const DarkContainer = styled.div`
  margin: 2%;
  padding: 2%;
  height: 450px;
  width: 350px;
  border-radius: 5px;
  background: #202123;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
`;

function History() {
  const CONTENT = [
    {
      text: "September 2021: Titan Analytics was launched - becoming one of the winners in Solana’s global IGNITION hackathon.",
      subtext: `See our explainer video and prototype walkthrough ${(
        <a href="https://www.youtube.com/watch?v=v6S2S0Pekgg" target="_blank">
          here
        </a>
      )}`,
      key: "1",
    },
    {
      text: "November 2021: Conducted one of the largest behavioural research studies into play to earn gaming globally. Created visibility into players' preferences and beliefs around gaming, and confirmed demand for Titan Analytics services.",
      subtext: `See our explainer video and prototype walkthrough ${(
        <a href="https://www.youtube.com/watch?v=v6S2S0Pekgg" target="_blank">
          here
        </a>
      )}`,
    },
  ];
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <Fade bottom>
            <div className="text-4xl lg:text-4xl md:text-5xl sm:text-4xl font-bold leading-normal text-white">
              <h1 id="context">Our History</h1>
            </div>
          </Fade>
          {CONTENT.map((c, key) => {
            return <NewsCard text={c.text} subtext={c.subtext} />;
          })}
        </Section>
      </Suspense>
    </>
  );
}

export default History;
