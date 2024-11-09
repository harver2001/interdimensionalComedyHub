const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Comedy Generator Endpoint using Fun Translations API
app.post('/api/generate-comedy', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.get(`https://api.funtranslations.com/translate/pirate.json`, {
      params: { text: prompt }
    });
    res.json({ comedy: response.data.contents.translated });
  } catch (error) {
    console.error('Error generating comedy:', error);
    res.status(500).json({ error: 'Failed to generate comedy content' });
  }
});

// Music Generator Endpoint using Fun Translations API
app.post('/api/generate-music', async (req, res) => {
  const { theme } = req.body;
  try {
    const response = await axios.get(`https://api.funtranslations.com/translate/yoda.json`, {
      params: { text: theme }
    });
    res.json({ music: response.data.contents.translated });
  } catch (error) {
    console.error('Error generating music:', error);
    res.status(500).json({ error: 'Failed to generate music content' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
