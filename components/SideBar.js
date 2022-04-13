import React from "react";
import styled from "styled-components";
const Container = styled.div`
  .icons {
    /* margin-top: 50px; */
    position: fixed;
    height: 100vh;
    @media (max-width: 768px) {
      height: 94vh;
    }
    z-index: 200;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bg {
    pointer-events: none;

    position: fixed;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.25);
    border-left: solid rgba(0, 0, 0, 0.5) 5px;
    height: 100vh;
    width: 60px;
    left: 0;
    top: 0;
    transition: all 0.7s;
  }

  img {
    margin-top: 35px;
    margin-left: 20px;
    cursor: pointer;
    width: 2.5vh;
    min-width: 25px;
    /* &:first-of-type {
      position: fixed;
    } */
    &:last-of-type {
      margin-bottom: 27px;
    }
  }
`;

export default function SideBar() {
  return (
    <Container>
      <div className="bg" />
      <div className="icons">
        <img src="/svg/wallet.svg" alt="wallet icon" />
        <div>
          <img src="/svg/instagram.svg" alt="instagram icon" />
          <img src="/svg/discord.svg" alt="discord icon" />
          <img src="/svg/twitter.svg" alt="twitter icon" />
        </div>
      </div>
    </Container>
  );
}
