import express from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import weatherRoute from './routes/weatherRoute.js';
import cors from 'cors';

const app = express();
app.use(cors()); // très important ici

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use('/api/weather', weatherRoute);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
export default app;