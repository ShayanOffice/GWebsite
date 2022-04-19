import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import blob_animation from "../../animations/animated_blob.json";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  bottom: 0vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  * {
    z-index: 51;
  }
`;

const Anim = () => {
  const options = {
    loop: true,
    autoplay: true,
    // initialSegment: [30, 150],
    animationData: blob_animation,
    // rendererSettings: {
    //   preserveAspectRatio: "none",
    // },
  };
  const { View } = useLottie(options, {
    zIndex: 6,
    pointerEvents: "none",
    // width: "70vw",
    width: "70%",
    minWidth: "480px",
    // heigth: "100%",
    flex: "none",
    // scrollSnapAlign: 'Start',
  });
  return View;
};

const AnimatedBlob = React.forwardRef((props, ref) => {
  const { height, width } = useWindowDimensions();

  return (
    <Container ref={ref}>
      <Anim />
    </Container>
  );
});
export default AnimatedBlob;
