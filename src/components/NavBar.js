import {Link} from "react-router-dom";
import styled from "styled-components";
import {
  Box,
  HStack,
  Link as ChakraLink, 
} from "@chakra-ui/react";

function NavBar() {
  const Nav = styled.nav`
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding-top: 1.15rem;
    padding-bottom: 1.15rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  `;
  const NavOptions = styled.div`
    display: flex;
    flex-direction: row;
    flex-gap: 1rem;
    justify-content: space-between;

    @media (max-width: 600px) {
      display: none;
    }
  `;
  const Option = styled.a`
    margin-top: 1rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: border-bottom ease-in 1.2s;
    &:hover {
      border-bottom: 2px solid white;
    }
  `;


  const links = [
    // {
    //   title: "Home",
    //   link: "/",
    // },


    {
      title: "Report",
      link: "/report",
    },

    {
      title: "Early Access",
      link: "/waitlist",
    },

    {
      title: "Contact",
      link: "/contact",
    },

  ]

  return (

    <Box position="fixed" top={0} width="100vw" left={0} bg="#1e0441c7" backdropFilter={"blur(8px)"} zIndex={1000}>
      <Nav>
        <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
        
          <svg
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3502 11.0845L9.08106 7.90833C8.93573 7.85251 8.78394 7.97345 8.80587 8.12758L11.9163 29.9871C11.9306 30.0877 12.0167 30.1624 12.1183 30.1624H13.1922C13.2881 30.1624 13.3711 30.0956 13.3916 30.002L17.4764 11.3186C17.4979 11.2201 17.4443 11.1207 17.3502 11.0845Z"
              fill="#fff"
            />
            <path
              d="M25.0015 0H0.296676C0.153591 0 0.0549359 0.14343 0.106114 0.27705L2.55846 6.6798C2.5887 6.75875 2.66448 6.81088 2.74902 6.81088H22.5634C22.648 6.81088 22.7239 6.75857 22.7541 6.67943L25.1922 0.27668C25.243 0.143119 25.1444 0 25.0015 0Z"
              fill="#fff"
            />
          </svg>

          <span className="font-semibold text-2xl tracking-tight ml-2">
            TITAN
          </span>
          
        </Link>
        <HStack gap={8}>
          {
            links.map( (el, idx ) => {
              return <ChakraLink rounded="sm" as={Link} color="white" fontSize="lg" to={ el.link } key={"link" + idx}>
                {el.title}
              </ChakraLink>
            })
          }
         
        </HStack>
      </Nav>
    </Box>
  );
}

export default NavBar;
