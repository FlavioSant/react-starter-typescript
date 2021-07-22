import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Containter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: white;

  img {
    width: 650px;
    height: 450px;
    animation: ${rotate} 15s linear infinite;
  }

  p {
    margin: 3rem 0;
  }
`;
