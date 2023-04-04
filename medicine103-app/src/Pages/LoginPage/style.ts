import styled from 'styled-components';
import image from '../../Images/103logo.png';

export const LoginBg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  max-height: 80vh;
  margin: auto;
`;

export const BgImage = styled.div`
  opacity: 0.1;
  background-image: ${`url(${image})`};
  position: absolute;
  width: 80vw;
  height: 80vh;
  top: calc(50% - 40vh);
  left: calc(50% - 40vw);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  pointer-events: none;
`;