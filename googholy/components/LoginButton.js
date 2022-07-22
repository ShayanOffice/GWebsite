import styled from 'styled-components';
import LottieAnim from './LottieAnim';

const Container = styled.div``;

export default function LoginButton({
  className,
  loginFunction,
  logoutFunction,
  isAuthenticated,
  isAuthenticating,
}) {
  return (
    <Container
      className={className}
      onClick={!isAuthenticated ? loginFunction : logoutFunction}
    >
      {isAuthenticated ? (
        <LottieAnim
          src='/lottie/FingerPrint.json'
          sizeX='300%'
          // sizeY="250%"
          renderer='canvas'
          speed={1}
          autoplay={false}
          hoverSegment={[0, 35]}

          alt='logout icon'
        />
      ) : (
        <LottieAnim
          src='/lottie/FingerPrint.json'
          sizeX='350%'
          // sizeY="250%"
          renderer='canvas'
          speed={2}
          autoplay={false}
          hoverSegment={[0, 35]}
          clickSegment={[36, 66]}
          alt='login icon'
        />
      )}
    </Container>
  );
}
