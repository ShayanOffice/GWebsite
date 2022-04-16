import styled from "styled-components";

const BlobOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 50;

  /* backdrop-filter: brightness(70%) blur(15px) hue-rotate(-3deg) contrast(7)
    saturate(0.88); */
  backdrop-filter: brightness(70%) blur(15px) hue-rotate(-3deg) contrast(7);
  pointer-events: none;
`;

export default BlobOverlay;
