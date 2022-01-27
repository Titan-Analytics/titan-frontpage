import { Suspense } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import NewsCard from "./NewsCard";
const Section = styled.div`
  padding: 8%;
  padding-top: 0;
  background: linear-gradient(#000, #000, #000);
`;

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const LeftContainer = styled.div`
  padding: 2%;
  width: 350px;
  border-radius: 5px;
  background: #202123;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
`;
const Image = styled.img`
  height: 10rem;
`;
function History() {
  const CONTENT = [
    {
      text: "September 2021: Titan Analytics was launched - becoming one of the winners in Solana’s global IGNITION hackathon.",
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
          <TextContainer>
            <LeftContainer>{CONTENT[0].text}</LeftContainer>

            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v6S2S0Pekgg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <LeftContainer>
              {" "}
              <TextContainer>
                November 2021: Conducted one of the largest behavioural research
                studies into play to earn gaming globally. Created visibility
                into players' preferences and beliefs around gaming, and aligned
                our strategy and product roadmap accordingly.
              </TextContainer>
            </LeftContainer>
          </TextContainer>
        </Section>
      </Suspense>
    </>
  );
}

export default History;
