import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './Header';
import Home from './Home';
import Resume from './Resume';
import Writings from './Writings';

const App = () => (
  <Router>
    <AppContainer>
      <Header />

      <Route exact={true} path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/writings" component={Writings} />

      {/* <FooterContainer>
        <SocialLink target="_blank" href="https://github.com/reinvanimschoot">
          GitHub
        </SocialLink>{' '}
        <SocialLink target="_blank" href="https://www.linkedin.com/in/rein-van-imschoot-458935ba/">
          LinkedIn
        </SocialLink>
        <SocialLink target="_blank" href="https://medium.com/@reinvanimschoot">
          Medium
        </SocialLink>
      </FooterContainer> */}
    </AppContainer>
  </Router>
);
export default App;

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #222831;
`;

const FooterContainer = styled.div`
  width: 100vw;
  border-top: 2px solid #00adb5;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: #00adb5;
  padding: 10px;
`;
