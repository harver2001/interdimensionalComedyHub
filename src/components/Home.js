import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  margin-bottom: 40px;
`;

const Banner = styled.h1`
  font-size: 2.5rem;
  color: #5a20cb;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 10px 0;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #5a20cb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #451b9d;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Banner>Welcome to Interdimensional Comedy Hub</Banner>
      <Description>
        Explore AI-powered comedy and personalized music! Customize prompts to create
        unique comedy shows and music tracks for all ages.
      </Description>
      <StartButton>Get Started</StartButton>
    </HomeContainer>
  );
};

export default Home;
