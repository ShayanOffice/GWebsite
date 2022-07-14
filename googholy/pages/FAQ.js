import React from "react";
import styled from "styled-components";

import AnimatedBlob from "../../googholy/components/AnimatedBlob";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
  margin-top: -60px;
  /* margin-bottom: 65px; */
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
    margin: 5px 10px;
  }
  .mainTitle {
    margin-top: 30px;
    margin-bottom: -30px;
    font-weight: bold;
    font-size: 5rem;
  }
  h3 {
    font-size: 3rem;
    font-weight: bold;
  }
  @media (max-aspect-ratio: 32/40) {
    height: 95vh;
  }

  @media (max-width: 1800px) {
    .content {
      font-size: 1.8rem;
      .mainTitle {
        font-size: 4rem;
      }
      h3 {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 980px) {
    /* padding: 4rem 6rem; */
    .content {
      font-size: 1.6rem;
      .mainTitle {
        font-size: 3rem;
      }
      h3 {
        font-size: 2.3rem;
      }
    }
  }
  @media (max-width: 780px) {
    .content {
      font-size: 1.4rem;
      .mainTitle {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 640px) {
    .content {
      font-size: 1.1rem;
      .mainTitle {
        font-size: 1.7rem;
      }
      h3 {
        font-size: 1.6rem;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 2rem 3rem;
    .content {
      font-size: 0.9rem;
      .mainTitle {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 390px) {
    padding: 2rem 3rem;
    .content {
      font-size: 0.7rem;
      .mainTitle {
        font-size: 1rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }
  }

  /* @media (max-height: 400px) {
    @media (max-width: 1400px) {
      .content {
        font-size: 2.7rem;
      }
    }
    @media (max-width: 1180px) {
      .content {
        font-size: 2.3rem;
      }
    }
    @media (max-width: 1080px) {
      .content {
        font-size: 1.8rem;
      }
    }
    @media (max-width: 640px) {
      .content {
        font-size: 1.5rem;
      }
    }
  } */

  /* @media (max-aspect-ratio: 32/40) {
    .content {
    }
    @media (max-width: 980px) {
      .content {
        font-size: 3.5rem;
      }
    }
    @media (max-width: 660px) {
      .content {
        font-size: 2.5rem;
      }
    }
    @media (max-width: 420px) {
      .content {
        font-size: 2.2rem;
      }
    }
    @media (max-width: 320px) {
      .content {
        font-size: 1.8rem;
      }
    }
    @media (max-width: 282px) {
      .content {
        font-size: 1.5rem;
      }
    }
  } */
`;

export default function FAQ() {
  return (
    <Container>
      <div className="content w-full h-full  flex flex-col text-center items-center">
        <div className="content w-full h-full flex flex-col justify-center text-center items-center">
          <h3>Utilities</h3>
          <span>GooGholy is our debut NFT project with special utilities.</span>
          <span>
            Owners will get a chance to gain access to future projects’
            whitelisting spots.
          </span>
          <span>You own the copyright of your GooGholy NFT’s artwork</span>
          <span>
            Giveaways and whitelisting ( Fair & Verifiable raffles using
            Chainlink VRF )
          </span>
        </div>
        <span className="mainTitle">FAQ</span>
        <div className="content w-full h-full flex flex-col justify-center text-center items-center">
          <span>
            BOOMHUNK is a game designer, developer, CG artist, and also music
            producer. He designed GooGholy’s character years ago for one of his
            game ideas
          </span>
          <h3>but</h3>
          <span>some life issues caused him to pause the project.</span>
          <h3>until </h3>
          <span>
            Now that the NFTs era has come, and opened the opportunity for his
            art to shine, BOOMHUNK brings you this project, the cute funny
            GooGholies who can grow and evolve over the project’s progress!
          </span>
        </div>
      </div>
    </Container>
  );
}
