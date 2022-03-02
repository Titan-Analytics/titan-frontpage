import styled from "styled-components";
import { GamePreference, PlayerDemographics, FullReport, ExecutiveSummary, Conclusion, ClosingStatement } from "../components/Report";
import Layout from "../components/layout";

const TransparencyContainer = styled.div`
  margin-left: 8%;
  margin-right: 8%;
  padding: 2%;
`;



function Report() {
  return (
    <>
      <Layout>
        <FullReport />
        <ExecutiveSummary />
        <Conclusion />
        <ClosingStatement />
        <PlayerDemographics />
        <GamePreference />
      </Layout>
    </>
  );
}

export default Report;
