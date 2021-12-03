import styled from 'styled-components';
import { ReactComponent as ReloadIcon } from 'assets/icons/reload-svgrepo-com.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  &::before {
    content: '';
    width: 80%;
    border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const Reload = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  width: 60px;
  height: 60px;
  z-index: 0;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledReloadIcon = styled(ReloadIcon)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    animation: loading 1s ease-in-out;

    @keyframes loading {
      to {
        transform: rotate(-360deg);
      }
    }
  }
`;

export const Amount = styled.div`
  position: absolute;
  top: 0;
  right: 150px;
  width: 200px;
  height: 60px;
  z-index: 0;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  box-shadow: -3px -3px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 5px;
`;

export const StyledLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;
`;

export const StyledSelect = styled.select`
  width: 60%;
  margin-right: 10px;
`;
