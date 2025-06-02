# 🔗 Hypothesis Builder – Générateur visuel d’hypothèses de recherche (GPT)

## 🎯 Objectif
Cette application aide les étudiants et chercheurs à formuler automatiquement des hypothèses de recherche claires à partir de deux variables grâce à l’intelligence artificielle (OpenRouter GPT).

---

## 🧠 Concept pédagogique
Dans la recherche scientifique, l’hypothèse est une **affirmation provisoire** sur une relation **cause-effet** entre deux variables. Ce générateur vise à :
- Simplifier la formulation des hypothèses
- Aider à bien structurer ses idées
- Proposer une hypothèse claire et exploitable dans un mémoire ou un article

---

## 🛠️ Fonctionnalités
- Saisie de deux variables (cause et effet)
- Génération automatique de l’hypothèse par GPT
- Interface responsive, sans base de données
- Déployable sur Render avec `.render.yaml`

---

## 🚀 Technologies
- Node.js + Express
- HTML/CSS/JS (Bootstrap)
- OpenRouter API (GPT-3.5)
- Déploiement : [Render.com](https://render.com)

---

## ⚙️ Installation locale
```bash
git clone https://github.com/EJM0101/hypothesis-builder.git
cd hypothesis-builder
npm install
cp .env.example .env
# Ajoutez votre clé OpenRouter dans .env
npm start
```

---

## 🌐 Déploiement Render
1. Ajoutez votre clé dans les variables d’environnement :
   - `OPENROUTER_API_KEY`
2. Connectez votre repo sur Render
3. Render détectera `.render.yaml` automatiquement

---

© 2025 – Conçu pour simplifier la méthodologie de recherche.
