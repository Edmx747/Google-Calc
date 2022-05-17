import express from 'express';
import cors from 'cors';
import calculateRouter from './routes/calculate.route';

const app = express();
const port = 3000;
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
app.use(cors())
app.use(express.json());
app.use('/calculate', calculateRouter);

export default app;
