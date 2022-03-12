import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image as ChakraImage,
  Text,
  Container,
  Grid,
} from "@chakra-ui/react";
import { ResponsiveBar } from '@nivo/bar'

function ExecutiveSummary() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/cont.jpeg" objectFit={"cover"} objectPosition={"20% 50%"} height="400px" alt="Full Report" rounded="sm" loading="lazy" />

      <Container maxWidth={1050} py={12}>
        <Fade>
          <Heading mb={4}>
            CONTEXT & PURPOSE
          </Heading>

          <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap={[0, 0, "5%"]} mb={10}>
            <Box>

              <Text mb={4}>
                Over the past year, there has been a significant increase in awareness and attention paid to blockchain gaming. Numerous, large brands including Meta, Ubisoft, Microsoft, Selfridges and Balenciaga have announced their intention to invest and nurture experiences in the metaverse. However, there is a clear gap in the availability of rich, data-driven perspectives on this market. Insights are limited to the macro level i.e. number of games launched, growth in the total player base or market cap, etc. and there does not appear to be any publicly available data to help us understand the individuals who are actually playing blockchain games i.e. who they are, what their preferences are, and how they make choices.
              </Text>

              <Text mb={4}>
                The purpose of this study was to address the identified market insight gap, creating a rich, publicly available fact-base on the Play-to-Earn gaming market, and informing Titan Analytic’s strategic direction. The report below provides insight into our findings at a population level, and identifies the three behavioural segments in the market.
              </Text>

              <Heading size="md" mb={2}>
                Survey Scope
              </Heading>

              <Text mb={8}>
                The survey was executed over 2 weeks between November 23rd and December 6th, 2021. It comprised of 46 questions covering demographics, game preference and intensity, and analytics demand. A total of over 2000 responses were gathered across 77 countries.
              </Text>
            </Box>

            <Box>

              <Heading size="sm" color="gray.700" textAlign="center">
                Relative Search Volume: {"“"}Play to Earn{"”"}
              </Heading>
              <Box height={[200, 210, "260px"]} width={["100%"]} rounded="sm" mb={2}>
                <SearchVolume />
              </Box>

              <Text fontSize="sm" color="gray.600" mb={10}>
                Source: Google Trends
              </Text>

              <ChakraImage width="100%" src="/micro-act.jpeg" objectFit={"cover"} height="220px" alt="Activision Blizzard Microsoft" rounded="sm" loading="lazy" />

            </Box>

          </Grid>



        </Fade>
      </Container>
    </Box>
  );
}

export default ExecutiveSummary;



const SearchVolume = () => {

  const data = [
    {
      "demo": "Feb",
      "Volume": 12,
    },

    {
      "demo": "Mar",
      "Volume": 12,
    },

    {
      "demo": "Apr",
      "Volume": 12,
    },

    {
      "demo": "May",
      "Volume": 18,
    },

    {
      "demo": "Jun",
      "Volume": 18,
    },

    {
      "demo": "Jul",
      "Volume": 45,
    },

    {
      "demo": "Aug",
      "Volume": 60,
    },

    {
      "demo": "Sep",
      "Volume": 49,
    },

    {
      "demo": "Oct",
      "Volume": 55,
    },

    {
      "demo": "Nov",
      "Volume": 88,
    },

    {
      "demo": "Dec",
      "Volume": 95,
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={[
        'Volume',
      ]}
      indexBy="demo"
      margin={{ top: 10, right: 30, bottom: 20, left: 30 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'Holdings',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.6
          ]
        ]
      }}
      legends={[

      ]}
      role="application"
      ariaLabel="Search Volume"
      valueFormat={value => `${value}%`}
    />
  )
}
