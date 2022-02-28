import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Image as ChakraImage,
  Text,
  Container,
  SimpleGrid,
  Link as ChakraLink,

} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { ResponsiveBar } from '@nivo/bar'

function PlayerDemographics() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  const data = [
    {
      "demo": "Crypto Holdings",
      ">$30k": 12.9,
      '$20k - $30k': 5.7,
      '$10k - $20k': 7.7,
      '$5k - $10k': 12.5,
      '<$5k': 61.2,
      
    },

  ];

  return (
    <Box >
      <ChakraImage width="100%" src="/player-demographics.jpeg" objectFit={"cover"} height="400px" alt="Player Demographics" rounded="sm" />

      <Container maxWidth={880} py={12}>
        <Fade bottom>
          <Heading textTransform={"uppercase"} mb={4}>
            Player Demographics
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} spacing={8}>
            <Box>
              <Heading size="lg">
                Gender
              </Heading>

            </Box>

            <Box>
              <Heading size="lg">
                Age
              </Heading>

            </Box>

            <Box>
              <Heading size="lg">
                Education
              </Heading>

            </Box>

            <Box>
              <Heading size="lg">
                Gender
              </Heading>

            </Box>

            <Box>
              <Heading size="lg">
                Country of Origin
              </Heading>

            </Box>

            <Box>
              <Heading size="lg">
                Crypto Holdings
              </Heading>

              <Box height="500px" position="relative">
                <ResponsiveBar
                  data={data}
                  keys={[
                    '<$5k',
                    '$5k - $10k',
                    '$10k - $20k',
                    '$20k - $30k',
                    '>$30k',
                  ]}
                  indexBy="demo"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  defs={[
                    {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: '#38bcb2',
                      size: 4,
                      padding: 1,
                      stagger: true
                    },
                    {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: '#eed312',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                    }
                  ]}
                  
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
                    legend: 'Percentage',
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
                    {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemOpacity: 1
                          }
                        }
                      ]
                    }
                  ]}
                  role="application"
                  ariaLabel="Crypto Holdings"
                  barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                />
              </Box>

            </Box>

          </SimpleGrid>

          <Text mb={4}>
            As the P2E market matures, we expect to see growth in the total number of players, as well as diversification of segments. We believe that game producers, guilds, and investment firms armed with a strong fact-base in which to ground their decisions, will possess the knowledge needed to best serve their users, and ultimately conquer a niche in the market.
          </Text>

          <Text mb={4}>
            We hope that this study serves to support both the Web3 community and the public at large, in understanding the P2E market and game players, and we look forward to participate in its growth and development in the coming years.
          </Text>




        </Fade>
      </Container>
    </Box>
  );
}

export default PlayerDemographics;
