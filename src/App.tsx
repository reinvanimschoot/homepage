import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './Header';
import Home from './Home';

const App = () => (
  <Router>
    <AppContainer>
      <Header />

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={Home} />
      <Route path="/topics" component={Home} />
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
