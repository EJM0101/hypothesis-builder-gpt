const fetch = require('node-fetch');

module.exports = async function generateHypothesis(cause, effect) {
  const prompt = `Tu es un expert en méthodologie de la recherche. Formule une hypothèse claire à partir des deux variables suivantes :
Cause : ${cause}
Effet : ${effect}
Réponds uniquement avec une phrase d'hypothèse bien formulée, sans introduction ni conclusion.`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5
    })
  });

  const data = await response.json();
  if (data.choices && data.choices[0]) {
    return data.choices[0].message.content;
  } else {
    throw new Error("Erreur de génération via OpenRouter.");
  }
};