import styled from "styled-components";
import { AnimationCanvas } from "../components/Landing";
import Contact from "../components/Contact";
import Layout from "../components/layout";

const TransparencyContainer = styled.div`
  margin-left: 8%;
  margin-right: 8%;
  padding: 2%;
`;



function Home() {
  return (
    <>
      <Layout>

        <div className="anim">
          <AnimationCanvas />
        </div>

        <Contact />
      </Layout>
    </>
  );
}

export default Home;
