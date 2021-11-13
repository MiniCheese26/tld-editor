import styled from 'styled-components';

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Lato, sans-serif;
  overflow-y: hidden;
  background-color: ${props => props.theme.bg};
`;
