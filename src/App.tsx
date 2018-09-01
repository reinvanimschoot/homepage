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
    </AppContainer>
  </Router>
);
export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #222831;
`;
