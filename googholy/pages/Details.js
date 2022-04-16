import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3.5rem;
  padding-right: 2.5rem;
  margin-top: -10px;
  margin-bottom: 65px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  font-family: "Amatic SC", cursive;
  .prices {
    /* background-color: #ccc; */
    height: 95%;
    width: 90%;
    margin: 5px;
    margin-bottom: 20px;

    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    border-radius: 16px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5)
    );

    .priceColumn {
      width: 100%;
      height: 98%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 6px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      font-size: 2rem;
      font-weight: bold;
      .evolutionPrice {
        align-items: center;
        position: relative;
        img {
          width: 55%;
          max-width: 300px;
          position: absolute;
          top: 85%;
          left: 60%;
        }
      }
      :nth-of-type(1) {
        border: none;
        background: none;
        box-shadow: none;
        font-size: 2.5rem;
        font-weight: bold;
        text-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff,
          0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
        .pricingImage {
          visibility: hidden;
        }
      }
      :nth-of-type(3) {
        .pricingImage {
          background-image: url("/img/BabyGooGholy.png");
        }
      }
      :nth-of-type(4) {
        .pricingImage {
          background-image: url("/img/GrownUpGooGholy.png");
        }
      }
      :nth-of-type(5) {
        .pricingImage {
          background-image: url("/img/NextEvolution.png");
        }
      }

      .pricingImage {
        width: 100%;
        height: 45%;
        background: no-repeat;
        background-image: url("/img/GooGholyEgg.png");
        background-position: center;
        background-size: contain;
      }
    }
    @media (orientation: portrait) {
      flex-direction: column;
      width: 98%;
      height: 75%;

      .priceColumn {
        align-items: center;
        padding: 0;
        * {
          width: 100%;
        }
        padding: 0 1rem;
        flex-direction: row;
        /* justify-content: center; */
        /* margin: auto; */
        font-size: 1.5rem;
        font-weight: bold;
        :nth-of-type(1) {
          font-size: 1rem;
          span {
          }
        }
        .pricingImage {
          height: 100%;
        }
        .evolutionPrice {
          /* visibility: hidden; */
          position: relative;
          img {
            transform: rotate(90deg) scaleY(-1);
            /* height: 60%;
            width: 90%; */
            top: 170%;
            left: 80%;
            @media (min-width: 678px) {
              width: 40%;
              top: 120%;
            }
            @media (max-width: 334px) {
              top: 120%;
            }
          }
        }
      }
    }
  }

  .textContent {
    margin-bottom: 2%;
    font-size: 2rem;
    line-height: 2.1rem;
    text-shadow: 0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff,
      0px 0px 20px #fff, 0px 0px 20px #fff, 0px 0px 20px #fff;
  }

  @media (max-width: 1800px) {
    .columnTitle {
      font-size: 1.8rem;
    }
    .textContent {
      font-size: 1.7rem;
      line-height: 1.8rem;
    }
  }
  @media (max-width: 980px) {
    .columnTitle {
      font-size: 1.7rem;
    }
    .textContent {
      font-size: 1.5rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 780px) {
    .columnTitle {
      font-size: 1.6rem;
    }
    .textContent {
      font-size: 1.2rem;
      line-height: 1.4rem;
      
    }
  }
  @media (max-width: 500px) {
    .columnTitle {
      font-size: 1.5rem;
    }
    .textContent {
      font-size: 1.1rem;
      line-height: 1.2rem;
      margin-bottom: 0%;
    }
  }
  @media (max-width: 390px) {
    .columnTitle {
      font-size: 1.3rem;
    }
    .textContent {
      font-size: 1rem;
      line-height: 1.2rem;

    }
  }

  /* ///////////////////////// */
  @media (orientation: portrait) {
    @media (max-height: 900px) {
      .priceColumn {
        * {
          font-size: 1.3rem;
          span {
            font-size: 1.3rem;
          }
        }
        img {
          height: 40%;
        }
      }
      .textContent {
        margin-bottom: 1%;
        /* font-size: 1.3rem; */
      }
    }
    @media (max-height: 678px) {
      .priceColumn {
        * {
          font-size: 1rem;
          span {
            font-size: 1rem;
          }
        }
        img {
          height: 40%;
        }
      }
      .textContent {
        margin-bottom: 0%;
        font-size: 1.2rem;
      }
    }
    @media (max-height: 520px) {
      .priceColumn {
        * {
          font-size: 0.8rem;
          span {
            font-size: 0.8rem;
          }
        }
        img {
          height: 40%;
        }
      }
      .textContent {
        margin-bottom: 0%;
        font-size: 1.1rem;
      }
    }
    @media (max-height: 450px) {
      .priceColumn {
        * {
          font-size: 0.9rem;
          span {
            font-size: 0.9rem;
          }
        }
        img {
          visibility: hidden;
        }
      }
      .textContent {
        margin-bottom: 0%;
        font-size: 0.9rem;
      }
    }
  }
`;

export default function Details() {
  return (
    <Container>
      <div className="prices flex justify-center align-middle">
        <div className="priceColumn">
          <div className="pricingImage" />
          <span className="columnTitle">Mint Price:</span>
          <span className="columnTitle">Evoloution Price:</span>
        </div>
        <div className="priceColumn">
          <div className="pricingImage" />
          <span>0.05 weth</span>
          <span className="evolutionPrice flex flex-col justify-center align-middle">
            <span>0.05 weth</span>
            {/* <span>Evolution Cost</span> */}
            <img src="/svg/EvArrow.svg" alt="evolution price arrow" ></img>
          </span>
        </div>
        <div className="priceColumn">
          <div className="pricingImage" />
          <span>0.05 weth</span>
          <span className="evolutionPrice flex flex-col justify-center align-middle">
            <span>0.05 weth</span>
            {/* <span>Evolution Cost</span> */}
            <img src="/svg/EvArrow.svg" alt="evolution price arrow" />
          </span>
        </div>
        <div className="priceColumn">
          <div className="pricingImage" />
          <span>0.05 weth</span>
          <span className="evolutionPrice flex flex-col justify-center align-middle">
            <span>X</span>
            {/* <span>Evolution Cost</span> */}
            {/* <img src="/svg/EvArrow.svg" alt="evolution price arrow" /> */}
          </span>
        </div>
        <div className="priceColumn">
          <div className="pricingImage" />
          <span>0.05 weth</span>
          <span className="evolutionPrice flex flex-col justify-center align-middle">
            <span>X</span>
            {/* <span>Evolution Cost</span> */}
            {/* <img src="/svg/EvArrow.svg" alt="evolution price arrow" /> */}
          </span>
        </div>
      </div>
      <div className="textContent">
        <p className="font-bold">
          HOW IT WORKS ?
          <br /> One BIG feature that makes Googholy NFT project shine, is that
          it’s gonna have phased minting for each drop.
          <br /> Meaning:
          <br />
          at some date we drop some Googholy eggs (There’s only 3200 of them)
          <br />
          also
        </p>
      </div>
    </Container>
  );
}
