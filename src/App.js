import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import ComedyGenerator from './components/ComedyGenerator';
import MusicGenerator from './components/MusicGenerator';

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Home />
      <ComedyGenerator />
      <MusicGenerator />
    </Container>
  );
}

export default App;
