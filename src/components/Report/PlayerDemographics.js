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
              <Heading size="lg" mb={2}>
                Gender
              </Heading>

              <Text p={2} px={3} bg='gray.100' display="inline-block" rounded="md" mx={3}>
                {">90%"} of players are male
              </Text>

              <Box height="420px" position="relative">
                <Gender />
              </Box>

            </Box>

            <Box>
              <Heading size="lg" mb={2}>
                Age
              </Heading>

              <Text p={2} px={3} bg='gray.100' display="inline-block" rounded="md" mx={3}>
                {"~75% were born between 1986 and 2000 (between 21 and 35 years old); average age is 30."} 
              </Text>

              <Box height="420px" position="relative">
                <Age />
              </Box>

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
              <Heading size="lg" mb={2}>
                Country of Origin
              </Heading>

              <Text p={2} px={3} bg='gray.100' rounded="md" mx={3}>
                {"~60%"} of respondents are from South East Asia (Philippines, Korea, Vietnam, China, Indonesia, Thailand)
              </Text>

              <Box height="420px" position="relative">
                <CountryOfOrigin />
              </Box>
            </Box>

            <Box>
              <Heading size="lg" mb={2}>
                Crypto Holdings
              </Heading>


              <Text p={2} px={3} bg='gray.100' rounded="md" mx={3}>
                {"~70% of respondents hold <$10,000 in crypto assets"}
              </Text>

              <Box height="420px" position="relative">
                <CryptoHoldings />
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




const Gender = () => {

  const data = [
    {
      "demo": "Gender",
      'Male': 90,
      'Female': 10,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        'Male',
        'Female',
      ]}
      indexBy="demo"
      margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
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
      ariaLabel="Gender"
      valueFormat={value => `${value}%`}
    />
  )
}

const Age = () => {

  const data = [
    {
      "demo": "Age",
      '<=1980': 5,
      '1981 - 1985': 9.6,
      '1986 - 1990': 21.2,
      '1991 - 1995': 31.7,
      '1996 - 2000': 21.8,
      '>=2000': 11.7,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        '<=1980',
        '1981 - 1985',
        '1986 - 1990',
        '1991 - 1995',
        '1996 - 2000',
        '>=2000',
      ].reverse() }
      indexBy="demo"
      margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
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
      ariaLabel="Gender"
      valueFormat={value => `${value}%`}
    />
  )
}


const CountryOfOrigin = () => {

  const data = [
    {
      "demo": "Country of Origin",
      'Phillipenes': 21.2,
      'Vietnam': 20,
      'Republic of Korea': 8.6,
      'Brazil': 5.5,
      'China': 4.75,
      'Indonesia': 4.5,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        'Phillipenes',
        'Vietnam',
        'Republic of Korea',
        'Brazil',
        'China',
        'Indonesia',
      ]}
      indexBy="demo"
      margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
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
      ariaLabel="Country Of Origin"
      valueFormat={value => `${value}%`}
    />
  )
}

const CryptoHoldings = () => {

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
      margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
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
      valueFormat={value => `${value}%`}
    />
  )
}