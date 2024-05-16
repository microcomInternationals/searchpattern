const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/suggestions', async (req, res) => {
  const { prefix, query } = req.query;
  const searchQueryWithPrefix = `${prefix} ${query}`;

  try {
    const response = await axios.get('https://www.google.com/complete/search', {
      params: {
        client: 'chrome',
        q: searchQueryWithPrefix,
      }
    });
    console.log('google api data response');
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching suggestions:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
