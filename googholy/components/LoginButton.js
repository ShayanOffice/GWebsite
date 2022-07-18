import styled from 'styled-components';
import lottie from 'lottie-web';
// import lottie from "lottie-web/build/player/lottie_light";
import { useEffect, useRef, useState } from 'react';

const Container = styled.div``;

export default function LoginButton() {
  const [hovering, setHovering] = useState(false);
  const ref = useRef();
  const [anim, setAnim] = useState();
  useEffect(() => {
    if (!anim?.animationID || anim?.animationID != '') {
      setAnim(
        lottie.loadAnimation({
          container: ref?.current, // the dom element that will contain the animation
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/lottie/12202-wallet.json', // the path to the animation json
          rendererSettings: {
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid meet',
          },
        })
      );
    } else console.log('AnimID:', anim.animationID);
    return () => {
      anim && anim.destroy();
    };
  }, []);

  return (
    <Container
      className='w-16 h-12 p-0 m-0 -ml-3 overflow-hidden text-center rounded '
      onMouseEnter={() => {
        console.log('anim:', anim);
        anim && anim.setSegment(19, 35);
        anim && anim.setSpeed(2);
        anim && anim.setDirection(1);
        anim && anim.playSegments(anim.segments);
      }}
      onMouseLeave={() => {
        console.log('anim:', anim);
        anim && anim.setDirection(-1);
        anim && anim.play();
      }}
    >
      <div className='w-full h-full scale-[3.5]' ref={ref}></div>
      {/* <div ref={blocklyRef} /> // Blockly will be injected here */}
      {/* <img
        src="/svg/Login.svg"
        alt="Login icon"
        // onClick={() => setIsWalletMenuOpen(true)}
      /> */}
      {/* <Lottie
        animationData={icon}
        loop={hovering}
        autoplay={false}
        onMouseEnter={() => {
          setHovering(true);
          console.log("Hovering");
        }}
        onMouseLeave={() => {
          setHovering(false);
          console.log("Leaving");
        }}
        style={{
          zIndex: 1,
          minWidth: "180px",
          minHeight: "180px",
          //   margin: "0 auto",
        }}
      /> */}
    </Container>
  );
}
