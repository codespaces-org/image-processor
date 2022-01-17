import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes/index';

const PORT = 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.get('/', (_req: Request, res: Response) => {
  res.redirect('/api');
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

export default app;
