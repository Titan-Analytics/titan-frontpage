import styled from "styled-components";
import { Hero, AnimationCanvas, Context, History } from "../components/Landing";
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
        
        <Hero />

        <Context />
        <History />
      </Layout>
    </>
  );
}

export default Home;
