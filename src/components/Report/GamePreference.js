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

          <UnorderedList mb={8} pl={5} spacing={2}>
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

          <UnorderedList mb={8} pl={5} spacing={2}>
            <ListItem>
              Gamers are clearly divided on the relative importance of playing for fun vs. playing for money.

            </ListItem>

            <ListItem>
              Almost half of the population indicates that having fun and making money are equally important. However there is a tendency for players who spend more time playing P2E games to place greater emphasis on playing for money.

            </ListItem>
          </UnorderedList>


          <Box height="390px" position="relative" mb={8}>
            <FocusOnMoney />
          </Box>

          <UnorderedList mb={8} pl={5} spacing={2}>
            <ListItem>
              On average, P2E gamers tend to prefer playing as part of a team vs playing alone.
            </ListItem>

            <ListItem>
              Slightly more than half of the population prefer to play as part of a team. However, this preference is stronger for those who spend more time playing games each week.
            </ListItem>
          </UnorderedList>


          <Box height="390px" position="relative" mb={8}>
            <PreferTeam />
          </Box>


          <SimpleGrid columns={[1, 1, 2]} spacing={6} mb={5}>

            <Box>

              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"Players strongly prefer playing games on PC."}
              </Text>

              <Box height="390px" position="relative">
                <GameConsole />
              </Box>

              <Text fontSize="sm" color="gray.700">
                * Results may be skewed due to the CoVID-19 pandemic - as people have generally spent more time at home than the historical average.
              </Text>

              <Text fontSize="sm" color="gray.700">
                ** There was no statistically significant difference in hardware preference by country.
              </Text>


            </Box>


            <Box>
              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"P2E gamers have a strong preference for MOBA, RPGs and Shooter games."}
              </Text>

              <Box height="390px" position="relative">
                <GameType />
              </Box>
            </Box>


            <Box>
              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"Despite their pivot into P2E, players still rate ‘game quality’ elements as more important than ‘economic potential’ when selecting a game."}
              </Text>

              <Box height="390px" position="relative">
                <GameChoice />
              </Box>

              <Text fontSize="sm" color="gray.700">
                * Other game-elements include Social interaction, Action, Creativity, and Public Status

              </Text>


            </Box>



            <Box>
              <Text p={2} px={3} bg='gray.100' rounded="md" >
                {"The main pathways to earn money in P2E continues to match traditional games."}
              </Text>

              <Box height="390px" position="relative">
                <EarningPathyways />
              </Box>


              <Text fontSize="sm" color="gray.700">
              * Other options include Offering peer-to-peer services (e.g. dungeon run ride-alongs), building & selling skins, and selling pre-built characters / accounts


              </Text>

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

const FocusOnMoney = () => {

  const data = [
    {
      "demo": "<=10 Hours",
      "Focused On Money": 27,
      "Equal Importance": 42,
      "Focused On Fun": 32,
    },

    {
      "demo": "11-20 Hours",
      "Focused On Money": 29,
      "Equal Importance": 54,
      "Focused On Fun": 17,
    },

    {
      "demo": ">20 Hours",
      "Focused On Money": 28,
      "Equal Importance": 50,
      "Focused On Fun": 22,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Focused On Money",
        "Equal Importance",
        "Focused On Fun",
      ].reverse()}
      indexBy="demo"
      margin={{ top: 30, right: 140, bottom: 50, left: 60 }}
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
      ariaLabel="Focus On Money"
      valueFormat={value => `${value}%`}
    />
  )
}

const PreferTeam = () => {

  const data = [
    {
      "demo": "<=10 Hours",
      "Strongly Prefer Team/Guild": 10,
      "Prefer Team/Guild": 37,
      "Prefer Games Alone": 25,
      "Strong Prefer Games Alone": 28,
    },

    {
      "demo": "11-20 Hours",
      "Strongly Prefer Team/Guild": 12,
      "Prefer Team/Guild": 45,
      "Prefer Games Alone": 21,
      "Strong Prefer Games Alone": 22,
    },

    {
      "demo": ">20 Hours",
      "Strongly Prefer Team/Guild": 15,
      "Prefer Team/Guild": 45,
      "Prefer Games Alone": 17,
      "Strong Prefer Games Alone": 23,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Strongly Prefer Team/Guild",
        "Prefer Team/Guild",
        "Prefer Games Alone",
        "Strong Prefer Games Alone",
      ].reverse()}
      indexBy="demo"
      margin={{ top: 30, right: 190, bottom: 50, left: 60 }}
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
      ariaLabel="Focus On Money"
      valueFormat={value => `${value}%`}
    />
  )
}


const GameConsole = () => {

  const data = [
    {
      "demo": "System",
      "Console": 6.8,
      "Computer": 67.7,
      "Mobile": 25.5,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Console",
        "Computer",
        "Mobile",
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
      ariaLabel="Console"
      valueFormat={value => `${value}%`}
    />
  )
}


const GameType = () => {

  const data = [
    {
      "demo": "Game Type",
      "Real-time Strategy": 11.3,
      "Action-Adventure": 12.4,
      "Shooters": 12.5,
      "RPGs": 14.5,
      "MOBA": 18,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Real-time Strategy",
        "Action-Adventure",
        "Shooters",
        "RPGs",
        "MOBA",
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
      ariaLabel="Console"
      valueFormat={value => `${value}%`}
    />
  )
}


const GameChoice = () => {

  const data = [
    {
      "demo": "Game Choice",
      "Economics": 13.6,
      "Goal Depth": 16.4,
      "Narrative": 16.6,
      "Aesthetics": 19.6,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Economics",
        "Goal Depth",
        "Narrative",
        "Aesthetics",
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
      ariaLabel="Console"
      valueFormat={value => `${value}%`}
    />
  )
}



const EarningPathyways = () => {

  const data = [
    {
      "demo": "Earning Pathways",
      "Selling Skins": 11,
      "Farming Resources": 23.3,
      "Missions": 20.2,
      "Trading Items": 25,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={[
        "Selling Skins",
      "Farming Resources",
      "Missions",
      "Trading Items",
      ].reverse()}
      indexBy="demo"
      margin={{ top: 30, right: 145, bottom: 50, left: 60 }}
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
      ariaLabel="Console"
      valueFormat={value => `${value}%`}
    />
  )
}


