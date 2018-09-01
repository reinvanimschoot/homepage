import * as React from 'react';
import { MdHeadsetMic, MdMailOutline } from 'react-icons/md';
import styled from 'styled-components';

const Home = () => {
  return (
    <ContentContainer>
      <ParagraphContainer>
        <Title>Hi, I'm Rein.</Title>
        <Title>I build web and native applications</Title>
        <Title>with React and GraphQL.</Title>
        <ButtonContainer>
          <CallButton>
            <MdHeadsetMic style={{ paddingRight: 10 }} /> Schedule a call
          </CallButton>
        </ButtonContainer>
        <ButtonContainer>
          <CallButton>
            <MdMailOutline style={{ paddingRight: 10 }} />
            Send a mail
          </CallButton>
        </ButtonContainer>
      </ParagraphContainer>
    </ContentContainer>
  );
};

export default Home;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #eeeeee;
  padding: 5;
  margin: 0;
  font-size: 3rem;
  @media all and (max-width: 479px) {
    font-size: 2rem;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-left: 2px solid #00adb5;
  @media all and (max-width: 479px) {
    border-left: none;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;
