import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/nft/googholy", { shallow: true });
  }, []);
  return (
    <Container>
      <Head>
        <title>BOOMHUNK | Website</title>
        <meta name="description" content="Official BOOMHUNK Website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        {/* <link rel="icon" href="/svg/discord.svg" /> */}
      </Head>
    </Container>
  );
}
