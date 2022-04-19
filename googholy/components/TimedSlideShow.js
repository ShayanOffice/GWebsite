import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react/cjs/react.development";

const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: 6px 6px;
  /* filter: drop-shadow(0 0 10px green); */
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;

  &:nth-of-type(2) {
    /* filter: drop-shadow(0 3px 15px green); */
    width: 100%;
    height: 100%;
  }
  .loadedImages {
    position: absolute;
    visibility: hidden;
  }
`;

export default function TimedSlideShow({ imgs }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < imgs.length - 1) return prevCount + 1;
        else return 0;
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container className="bg-no-repeat font-bold text-2xl" img={imgs[count]}>
      <div className="loadedImages">
        {imgs.map((item, i) => (
          <img src={item} key={i} alt="preloaded images" />
        ))}
      </div>
      {/* {count} */}
    </Container>
  );
}
