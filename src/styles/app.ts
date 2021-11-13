import styled from 'styled-components';

export const AppContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input`
  padding: 0.4rem;
  font-size: 50pt;
  border: unset;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
  background-color: ${props => props.theme.fg};
  color: ${props => props.theme.font};

  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

export const ResultsContainer = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;

  & > div:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const ResultsRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.fg1};
  transition: background-color .2s ease-in-out;

  & > p {
    color: ${props => props.theme.font};
    font-size: 30pt;
    padding: 0.4rem;
  }

  &:hover {
    background-color: ${props => props.theme.fg};
    cursor: pointer;
  }
`;
