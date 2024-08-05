import express from 'express';
import cors from 'cors';

import config from './config.js';

import customerRoutes from './routes/customerRoutes.js';
import routeRoutes from './routes/routeRoutes.js';

const { port } = config;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/routes', routeRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
