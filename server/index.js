import express from 'express';
import customerRoutes from './routes/customerRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/customers', customerRoutes);

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
