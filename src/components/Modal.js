import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose }) => {
  const StyledModalBody = styled.div`
    padding-top: 10px;
  `;

  const StyledModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
  `;

  const StyledModal = styled.div`
    background: white;
    width: 25%;
    height: 48%;
    border-radius: 3px;
    padding: 24px;
  `;
  const StyledModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  `;

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            <svg
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </StyledModalHeader>
        <StyledModalBody>
          <div className="m-sm">
            <h1 className="font-bold text-lg">Request Early Access</h1>
            <p className="text-sm">
              Sign up to be one of the first to use Titan.
            </p>
            <form className="bg-white shadow-md rounded mb-lg mt-lg">
              <div className="mb-lg">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full px-sm py-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                What’s your interest in Titan?
              </label>
              <select
                className="shadow appearance-none border rounded w-full px-sm py-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state"
                placeholder="Select an option"
              >
                <option value="Optimize NFT trading">
                  Optimize NFT trading
                </option>
                <option value="Maximize in-game earning potential">
                  Maximize in-game earning potential
                </option>
                <option value="Invest in Titan Analytics">
                  Invest in Titan Analytics
                </option>
                <option value="Press or media inquiry">
                  Press or media inquiry
                </option>
                <option value="Something else">Something else</option>
              </select>
            </form>
            <div className="flex m-auto justify-center">
              <button className="transition duration-500 ease-in-out bg-blue  px-xl py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-50 text-white mt-4 lg:mt-0">
                Join the waitlist
              </button>
            </div>
          </div>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
