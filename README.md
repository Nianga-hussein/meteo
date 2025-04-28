
# 🌦️ Agrégateur et Normalisateur d’API Météo

## 📚 Catégorie
- Intégration API
- Gestion des erreurs
- Normalisation des données

## 📄 Description

Ce projet consiste à créer une API unifiée qui récupère et normalise les données météorologiques à partir de deux sources :

- **OpenWeatherMap** (API REST)
- **WeatherGraph** (API GraphQL)

L’API renvoie un schéma **normalisé** sous la forme suivante :

```json
{
  "city": "Paris",
  "temperature": "15°C",
  "humidity": 85,
  "source": "OpenWeatherMap | WeatherGraph"
}
```

---

## ✅ Ce qui est évalué

- **Intégration correcte** d'une API **REST** et d'une API **GraphQL**.
- **Gestion robuste** des erreurs asynchrones et attendues.
- **Stratégie de limitation du débit** (rate-limiting) pour protéger l'API.
- **Utilisation sécurisée** de **variables d’environnement** via un fichier `.env`.
- **Tests unitaires** et de validation, notamment pour les **cas limites** (ex : villes invalides).

---

## 🚀 Démarrage rapide

### 1. Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/nom-du-repo.git
cd nom-du-repo
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine :

```bash
touch .env
```

Ajouter les clés API :

```env
OPENWEATHERMAP_API_KEY=ta_cle_api
WEATHERGRAPH_API_ENDPOINT=url_de_weathergraph
```

### 4. Lancer le serveur

```bash
npm run start
```

---

## 🧪 Tests

Pour exécuter les tests :

```bash
npm run test
```

- Tests des réponses pour des villes valides et invalides
- Tests de la gestion des erreurs
- Tests du mécanisme de limitation du débit

---

## 🛠️ Stack technique

- Node.js
- Express
- Axios (requêtes HTTP REST)
- graphql-request (requêtes GraphQL)
- dotenv (gestion des variables d’environnement)
- jest (framework de tests)

---

## 🔥 Fonctionnalités futures possibles

- Mise en cache des réponses
- Support de nouvelles sources météorologiques
- Authentification API (clé d’API par utilisateur)

---


## ✨ Auteurs

> Projet réalisé avec ❤️ par NIANGA Hussein - 2025.

