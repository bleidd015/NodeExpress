const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello there!');
});

app.get('/show', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the API');
  }
});

app.get('/achievement', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    const achievement = response.data[0]?.achievement;
    if (achievement) {
      res.send(achievement);
    } else {
      res.status(404).send('Achievement not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the API');
  }
});

app.get('/greet', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    const sayGreeting = response.data[1]?.sayGreeting;
    if (sayGreeting) {
      res.send(sayGreeting);
    } else {
      res.status(404).send('Greeting not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the API');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
