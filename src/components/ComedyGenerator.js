import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const GeneratorContainer = styled.div`
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

const ComedyOutput = styled.div`
  margin-top: 20px;
  font-style: italic;
  color: #555;
`;

const ComedyGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [comedy, setComedy] = useState('');

  const generateComedy = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-comedy', { prompt });
      setComedy(response.data.comedy);
    } catch (error) {
      setComedy('Oops! Something went wrong.');
    }
  };

  return (
    <GeneratorContainer>
      <Title>Generate Your Custom Comedy Show</Title>
      <Input
        type="text"
        placeholder="Enter a funny prompt or theme..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <GenerateButton onClick={generateComedy}>Generate Comedy</GenerateButton>
      {comedy && <ComedyOutput>{comedy}</ComedyOutput>}
    </GeneratorContainer>
  );
};

export default ComedyGenerator;
