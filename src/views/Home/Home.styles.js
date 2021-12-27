import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url('https://assets.codepen.io/1538474/star.svg'), linear-gradient(to bottom, #05007a, #4d007d);
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 100vw;
    flex-direction: unset;
  }
`;
