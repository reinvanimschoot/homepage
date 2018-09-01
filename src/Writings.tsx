import * as React from 'react';
import { MdHeadsetMic, MdMailOutline } from 'react-icons/md';
import styled from 'styled-components';

const Home = () => {
  return (
    <ContentContainer>
      <ParagraphContainer>
        <Title>Writings</Title>
        <SubTitle target="_blank" href="https://medium.com/p/236d1d52256">
          A quick look at react-native-typography
        </SubTitle>
        <Caption>Medium - Jun 4</Caption>
        <SubTitle target="_blank" href="https://medium.com/p/709fd94b3e71">
          Caching images in React Native
        </SubTitle>
        <Caption>Medium - Apr 18</Caption>
      </ParagraphContainer>
    </ContentContainer>
  );
};

export default Home;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 35%;
  margin-top: 5%;
  flex-direction: column;
  @media all and (max-width: 479px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    margin-top: 50px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    margin-left: 20%;
    margin-top: 10%;
  }
`;

const Title = styled.h1`
  color: #eeeeee;
  padding: 5;
  margin: 0;
  font-size: 3rem;
  margin-bottom: 20px;
  @media all and (max-width: 479px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.a`
  color: #eeeeee;
  text-decoration: none;
  padding: 5;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  @media all and (max-width: 479px) {
    font-size: 1rem;
  }
`;

const Caption = styled.p`
  color: #00adb5;
  padding: 5;
  font-style: italic;
  margin: 0;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 400;
  @media all and (max-width: 479px) {
    font-size: 1rem;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-left: 2px solid #00adb5;
  @media all and (max-width: 479px) {
    // border-left: none;
    margin: 10px;
  }
`;

const CallButton = styled.h3`
  color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px 0 0 0;
  border-radius: 15px;
  border: 2px solid #00adb5;
  font-weight: 600;
`;

const ButtonContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;
