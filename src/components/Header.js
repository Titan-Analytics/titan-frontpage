import React from "react";
import Modal from "./Modal";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Container = styled.div`
  margin-top: 5%;
`;

function Header() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Container>
      <div>
        <h2 className="font-normal leading-normal mb-2 text-white">
          Launching Q2 2022
        </h2>
      </div>
      <Fade>
        <div className="container flex-col mt-5 text-4xl lg:text-6xl md:text-5xl sm:text-4xl font-bold leading-normal mt-0 mb-2 text-white">
          <h1>Commercial analytics</h1>
          <h1>Built for the Metaverse</h1>
        </div>
        <div className="mt-sm">
          <h2 className="font-normal leading-normal mt-0 mb-2 text-white">
            Modern analytics to support play to earn gaming and NFT trading.
            Quickly spot opportunities in the market and maximize earning
            potential.{" "}
          </h2>
        </div>
      </Fade>
      <div className="my-sm">
        <div className="mr-sm transition duration-500 ease-in-out bg-blue bg-opacity-30 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-50 text-white mt-4 lg:mt-0">
          <button onClick={() => setShowModal(true)}>
            Sign up for early access!!
          </button>
        </div>
        <div className="transition duration-500 ease-in-out border border-opacity-0 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:border-opacity-90 text-white mt-4 lg:mt-0">
          <button>Get in Touch</button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
