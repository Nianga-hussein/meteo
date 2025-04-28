# 🌦️ Weather Aggregator

**Weather Aggregator** est une application complète permettant d'agréger et d'afficher des données météo provenant de plusieurs sources (OpenWeather et WeatherGraph) en utilisant **Node.js** pour le backend et **React** (avec **Vite**) pour le frontend.

---

## 📁 Structure du projet

```
/weather-aggregator
├── backend
│   ├── controllers
│   │   └── weatherController.js
│   ├── services
│   │   ├── openWeatherService.js
│   │   └── weatherGraphService.js
│   ├── routes
│   │   └── weatherRoute.js
│   ├── tests
│   │   └── weather.test.js
│   ├── app.js
│   ├── .env
│   ├── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── WeatherCard.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
├── README.md
```

---

## 🚀 Installation

### 1. Cloner le dépôt

```bash
git clone <repository-url>
cd weather-aggregator
```

---

## 🛠️ Backend

### Installation des dépendances

```bash
cd backend
npm install
```

### Lancer le serveur

```bash
npm start
```

Le backend sera accessible sur `http://localhost:3000`.

---

## 🛠️ Frontend

### Installation des dépendances

```bash
cd frontend
npm install
```

### Lancer l'application React

```bash
npm run dev
```

Le frontend sera accessible sur `http://localhost:5173`.

---

## ⚙️ Configuration

Créer un fichier `.env` dans `backend/` :

```bash
# backend/.env
OPENWEATHER_API_KEY=4066a575c0f2c09b98d809a9d2fe20d4
WEATHERGRAPH_API_ENDPOINT=https://your-weathergraph-endpoint/graphql
```

Créer aussi un fichier `.env` dans `frontend/` si besoin d'API URL spécifique :

```bash
# frontend/.env
VITE_API_URL=http://localhost:3000
```

---

## 📡 API Backend

**Route principale :**

- `GET /api/weather?city=Paris`

**Réponse JSON :**

```json
{
  "city": "Paris",
  "temperature": "15°C",
  "humidity": 85,
  "source": "OpenWeatherMap | WeatherGraph"
}
```

---

## 🎨 Frontend

- **WeatherCard.jsx** : Composant React affichant joliment la météo avec TailwindCSS.
- **api.js** : Service pour appeler l'API backend.

---

## 🧪 Tests

Dans le dossier `backend/tests/`, exécuter :

```bash
npm run test
```

> Teste les intégrations et les erreurs potentielles de l'API météo.

---

## 📜 Scripts utiles

Dans `backend/package.json` :

- `npm start` : Lance le serveur Express.

Dans `frontend/package.json` :

- `npm run dev` : Démarre le serveur Vite en mode développement.

---

## 🛡️ Technologies utilisées

- **Backend** : Node.js, Express, GraphQL Client
- **Frontend** : React, Vite, TailwindCSS
- **Tests** : Jest (pour le backend)
- **Autres** : Dotenv pour la gestion des environnements

---

## ✨ Auteurs

> Projet réalisé avec ❤️ par NIANGA Hussein - 2025.

