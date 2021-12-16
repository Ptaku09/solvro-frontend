import styled from 'styled-components';

export const Wrapper = styled.div`
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
