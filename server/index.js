import express from 'express';
import cors from 'cors';

import config from './config.js';

import customerRoutes from './routes/customerRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import coachRoutes from './routes/coachRoutes.js';

const { port, db } = config;
console.log(db.host);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/coaches', coachRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
