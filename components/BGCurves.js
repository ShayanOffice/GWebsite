import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import bg_animation from "../animations/animated_melts.json";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  /* bottom: -5vh; */
  
  z-index: 1;
  display: flex;
  align-items: flex-end;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  overflow-y: hidden;
`;

const Anim = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: bg_animation,
    // rendererSettings: {
    //   preserveAspectRatio: "none",
    // },
  };
  const { View } = useLottie(options, {
    zIndex: 6,
    pointerEvents: "none",
    // width: "70vw",
    height: "65%",
    flex: "none",
    // scrollSnapAlign: 'Start',
  });
  return View;
};

const BGCurves = React.forwardRef((props, ref) => {
  const { height, width } = useWindowDimensions();

  const moreCurves = (count) => {
    if (width > 768) {
      let animCurves = [];
      for (let index = 0; index < count; index++) {
        animCurves.push(<Anim />);
      }
      // console.log(animCurves);
      return animCurves.map((item, i) => <Anim key={i} />);
    }
    return;
  };

  return (
    <Container ref={ref}>
      {/* <Lottie
          animationData={bg_animation}
          style={{
            zIndex: 1,
            pointerEvents: 'none',
            position: 'absolute',
            width: '500px',
            height: '500px',
          }}
        /> */}
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      <Anim />
      {/* {moreCurves(3)} */}
    </Container>
  );
});
export default BGCurves;
