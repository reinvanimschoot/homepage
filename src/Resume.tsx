import * as React from 'react';
import { MdHeadsetMic, MdMailOutline } from 'react-icons/md';
import styled from 'styled-components';

const Home = () => {
  return (
    <ContentContainer>
      <ParagraphContainer>
        <Title>Resume</Title>
        <SubTitle>
          Full-stack Mobile / Web Consultant
          <b> at G2i</b>
        </SubTitle>
        <Caption>Aug 18 - Present</Caption>
        <SubTitle>
          Full-stack Mobile / Web
          <b> Freelancer</b>
        </SubTitle>
        <Caption>Feb 18 - Present</Caption>
        <SubTitle>
          Frontend developer at
          <b> University Of Ghent</b>
        </SubTitle>
        <Caption>Feb 17 - Feb 18</Caption>
        <SubTitle>
          Full-stack developer at
          <b> KampAdmin</b>
        </SubTitle>
        <Caption>Jan 16 - Dec 16</Caption>
        <SubTitle>
          Teacher of Professional English at
          <b> Howest University College</b>
        </SubTitle>
        <Caption>Nov 15 - Jan 16</Caption>
        <SubTitle>
          Backend developer intern at <b>Silverfin</b>
        </SubTitle>
        <Caption>Sept 15 - Nov 15</Caption>
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
  margin-bottom: 20px;
  @media all and (max-width: 479px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h4`
  color: #eeeeee;
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
