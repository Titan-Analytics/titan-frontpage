import React from "react";
import Fade from "react-reveal/Fade";
import {
  Box,
  SimpleGrid,
  Image as ChakraImage,
  Text,
  Container,
  Heading,
  UnorderedList, 
  ListItem, 

} from "@chakra-ui/react";
import { ResponsiveBar } from '@nivo/bar'

function GamePreference() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/game-preference.jpeg" objectFit={"cover"} height="400px" alt="Full Report" rounded="sm" />


      <Container maxWidth={950} py={12}>
        <Fade bottom>

          <Heading mb={4} textTransform="uppercase">
            Game Preference & Duration
          </Heading>

          <UnorderedList mb={8} pl={5}>
            <ListItem>
            P2E gamers are seasoned players, they invest a significant amount of time into gameplay each week, and are highly focused on P2E titles
            </ListItem>

            <ListItem>
            There is a high bar for attention capture among P2E gamers.
            </ListItem>
          </UnorderedList>

          <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={5}>
            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {">50% of respondents have been playing online games for >10 years"}
                
              </Text>

              <Box height="390px" position="relative">
                <YearsPlayed />
              </Box>

            </Box>


            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {">45% of respondents play online games for >20 hours per week"}
              </Text>

              <Box height="390px" position="relative">
                <HoursPerWeek />
              </Box>

            </Box>

            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"60% of respondents spend 100% of their time playing P2E games"}
              </Text>

              <Box height="390px" position="relative">
                <FullTime />
              </Box>

            </Box>
          </SimpleGrid>



          <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={5}>
            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"66% of respondents prefer to play a large number of games at any given time, rather than focusing on just a few."}
                
              </Text>

              <Box height="390px" position="relative">
                <LargeNumberGames />
              </Box>

            </Box>


            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"56% prefer to switch up the games they play relatively frequently throughout the year"}
              </Text>

              <Box height="390px" position="relative">
                <PlayFrequently />
              </Box>

            </Box>

            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"On average, individual games only captured 4% of respondents. The exception is Axie Infinity, which captured 22%."}
              </Text>

              <Box height="390px" position="relative">
                <WhichGame />
              </Box>

            </Box>
          </SimpleGrid>
        </Fade>
      </Container>
    </Box>
  );
}

export default GamePreference;



const YearsPlayed = () => {

  const data = [
    {
      "demo": "Years Played",
      ">10 Years": 53,
      '5 - 10 Years': 27,
      '>5 Years': 21,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        '>10 Years',
        '5 - 10 Years',
        '>5 Years',
      ].reverse()}
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

const HoursPerWeek = () => {

  const data = [
    {
      "demo": "Hours Per Week",
      ">20 Hours": 47,
      "11 - 20 Hours": 16,
      "<=10 Hours": 37,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        ">20 Hours",
      "11 - 20 Hours",
      "<=10 Hours",
      ].reverse()}
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


const FullTime = () => {

  const data = [
    {
      "demo": "Time Playing",
      "<Full": 42,
      "Full Time": 58,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "<Full",
      "Full Time",
      ].reverse()}
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

const LargeNumberGames = () => {

  const data = [
    {
      "demo": "Many Games",
      "Strongly Disagree / Disagree": 19.33,
      "Neither Agree Nor Disagree": 15.11,
      "Strongly Agree / Agree": 66,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Strongly Disagree / Disagree",
      "Neither Agree Nor Disagree",
      "Strongly Agree / Agree",
      ].reverse()}
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

const PlayFrequently = () => {

  const data = [
    {
      "demo": "Play Frequently",
      "Strongly Disagree / Disagree": 22.6,
      "Neither Agree Nor Disagree": 21,
      "Strongly Agree / Agree": 56,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Strongly Disagree / Disagree",
      "Neither Agree Nor Disagree",
      "Strongly Agree / Agree",
      ].reverse()}
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
      ariaLabel="Play Frequently"
      valueFormat={value => `${value}%`}
    />
  )
}


const WhichGame = () => {

  const data = [
    {
      "demo": "Title", 
      "The Sandbox": 4.9, 
      "Alien Worlds": 5, 
      "Crypto Blades": 5.1, 
      "Gods Unchained": 7.5, 
      "Splinterlands": 8.5, 
      "Axie Infinity": 21.7, 

    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "The Sandbox", 
      "Alien Worlds", 
      "Crypto Blades", 
      "Gods Unchained", 
      "Splinterlands", 
      "Axie Infinity", 
      ].reverse()}
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
      ariaLabel="Play Frequently"
      valueFormat={value => `${value}%`}
    />
  )
}