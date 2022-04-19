import React from "react";
import styled from "styled-components";

import AnimatedBlob from "../../googholy/components/AnimatedBlob";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3.5rem;
  padding-right: 2.5rem;
  padding: 5rem 12rem;
  margin-top: -10px;
  margin-bottom: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 1.9rem;
  font-weight: bold;
  position: relative;
  font-family: "Amatic SC", cursive;
  div {
    margin-top: 2rem;
  }
  .bg {
    /* z-index: -5000; */
    filter: blur(50px);
  }
`;

export default function RoadMap() {
  return (
    <Container>
      <h1>ROADMAP</h1>
      {/* <div className="bg w-full h-full bg-white flex justify-center" /> */}
      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full flex justify-center line-through">
          making First three evolution stages of art
          <br /> Making rarity work.
          <br />
          Website 1.0 design and deployment.
          <br /> NFT Minting and Evolution.
          <br />
          functionality Social channels & Discord server creation.
          <br />
          Main teaser music and video creation.
        </div>
        <div className="w-full h-full flex justify-center">
          Eggs whitelisting <br />
          Eggs mint date
        </div>
        <div className="w-full h-full flex justify-center">
          Baby GooGholies whitelisting <br />
          Baby GooGholies Mint date
        </div>
        <div className="w-full h-full flex justify-center">
          GooGholies whitelisting
          <br /> GooGholies Mint date
        </div>
      </div>

      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full flex justify-center">Rarity Checker</div>
        <div className="w-full h-full flex justify-center text-center">
          DAO <br />
          Staking
          <br /> Start Developmet of boomhunk Metaverse Music Festivals
          <br />
          Design and add Googholies final Evolution stage NFTs
        </div>
        <div className="w-full h-full flex justify-center">
          Making next-generation Googholies
          <br /> GameFi whitepapers
          <br /> Other NFT projects
        </div>
      </div>
    </Container>
  );
}
