import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MusicContainer = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const GenerateButton = styled.button`
  padding: 10px 20px;
  background-color: #5a20cb;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #451b9d;
  }
`;

const MusicOutput = styled.div`
  margin-top: 20px;
  font-style: italic;
  color: #555;
`;

const MusicGenerator = () => {
  const [theme, setTheme] = useState('');
  const [music, setMusic] = useState('');

  const generateMusic = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-music', { theme });
      setMusic(response.data.music);
    } catch (error) {
      setMusic('Oops! Something went wrong.');
    }
  };

  return (
    <MusicContainer>
      <Title>Personalized Kids' Music Generator</Title>
      <Input
        type="text"
        placeholder="Enter a theme or name for personalization..."
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <GenerateButton onClick={generateMusic}>Generate Music</GenerateButton>
      {music && <MusicOutput>{music}</MusicOutput>}
    </MusicContainer>
  );
};

export default MusicGenerator;
