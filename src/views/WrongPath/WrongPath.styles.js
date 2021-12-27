import styled from 'styled-components';
import { ReactComponent as Icon404 } from 'assets/icons/404.svg';
import { ReactComponent as Astronaut } from 'assets/icons/astronaut.svg';
import { ReactComponent as Spaceship } from 'assets/icons/spaceship.svg';

export const Wrapper = styled.div`
  background-image: url('https://assets.codepen.io/1538474/star.svg'), linear-gradient(to bottom, #05007a, #4d007d);
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledIcon404 = styled(Icon404)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 15%;
  height: 20vh;
  width: 35vw;
`;

export const Mars = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 30vh;
  background: url('https://assets.codepen.io/1538474/mars.svg') no-repeat bottom center;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 45%;
`;

export const Title = styled.h3`
  color: white;
  font-weight: 500;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge};
  margin: 5px;
`;

export const Subtitle = styled.h4`
  color: white;
  font-weight: 400;
  text-align: center;
  font-size: 3.5vmin;
  margin: 0;
`;

export const StyledAstronaut = styled(Astronaut)`
  position: absolute;
  top: 25%;
  left: 12%;
  animation: floating 3s infinite ease-in-out;

  @keyframes floating {
    from {
      transform: translateY(0px);
    }
    65% {
      transform: translateY(15px);
    }
    to {
      transform: translateY(-0px);
    }
  }
`;

export const StyledSpaceship = styled(Spaceship)`
  position: absolute;
  bottom: 20%;
  right: 15%;
`;
