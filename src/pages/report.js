import styled from "styled-components";
import { MarketSegmentation, GamePreference, PlayerDemographics, FullReport, ExecutiveSummary, Conclusion, ClosingStatement } from "../components/Report";
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
        <PlayerDemographics />
        <GamePreference />
        <MarketSegmentation />
        <Conclusion />
        <ClosingStatement />
      </Layout>
    </>
  );
}

export default Report;
