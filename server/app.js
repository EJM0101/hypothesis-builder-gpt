const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateHypothesis = require('./openaiRouter');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/generate', async (req, res) => {
  const { cause, effect } = req.body;
  if (!cause || !effect) return res.status(400).json({ error: "Les deux variables sont requises." });
  try {
    const result = await generateHypothesis(cause, effect);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});