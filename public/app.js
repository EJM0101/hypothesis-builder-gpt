document.getElementById('hypothesisForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const cause = document.getElementById('cause').value.trim();
  const effect = document.getElementById('effect').value.trim();
  if (!cause || !effect) return;

  const response = await fetch('/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cause, effect })
  });

  const data = await response.json();
  document.getElementById('hypothesisText').innerText = data.result || "Erreur lors de la génération.";
});