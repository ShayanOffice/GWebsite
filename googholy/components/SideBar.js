import React, { useRef } from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import AnimatedButton from './AnimatedButton';

const Container = styled.div`
  .icons {
    position: fixed;
    height: 100vh;
    z-index: 100001;
    top: 0;
    left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-aspect-ratio: 32/40) {
      height: 96.8vh;
    }
  }
  .bg {
    pointer-events: none;
    position: fixed;
    z-index: 100000;
    background-color: rgba(255, 255, 255, 0.3);
    height: 100vh;
    width: 68px;
    left: 0;
    top: 0;
    transition: all 0.7s;
    backdrop-filter: blur(15px);
  }

  img {
    margin-top: 35px;
    cursor: pointer;
    width: 1.1vw;
    min-width: 25px;
    &:last-of-type {
      margin-bottom: 55px;
    }
  }

  @media (max-width: 640px) {
    .icons {
      left: 23px;
    }
    .bg {
      width: 55px;
    }
    img {
      min-width: 19px;
    }
  }
  @media (max-width: 500px) {
    .icons {
      left: 14px;
    }
    .bg {
      width: 40px;
    }
    img {
      /* width: 1.1vw; */
      min-width: 17px;
    }
  }
`;

export default function SideBar({ setIsWalletMenuOpen }) {
  // const blocklyRef = useRef(null);
  return (
    <Container>
      <div className='bg' />
      <div className='icons'>
        <div>
          <img
            src='/svg/wallet.svg'
            alt='wallet icon'
            onClick={() => setIsWalletMenuOpen(true)}
          />
          {/* <LoginButton/> */}
          <AnimatedButton
            className='w-16 h-20'
            // forward
            src='/animated/12202-wallet.json'
            sizeX='192px'
            sizeY='192px'
            speed={1}
            segment={[19, 25]}
            FrameEvents={{
              15: (e, animated, element) =>
                console.log('entered frame 15', e.direction),
              20: (e, animated, element) =>
                console.log('entered frame 20', e.direction),
            }}
          />
        </div>
        <div>
          <img src='/svg/instagram.svg' alt='instagram icon' />
          <img src='/svg/discord.svg' alt='discord icon' />
          <img src='/svg/twitter.svg' alt='twitter icon' />
        </div>
      </div>
    </Container>
  );
}
