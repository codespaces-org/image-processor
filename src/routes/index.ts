/* eslint-disable new-cap */
import { Request, Response, Router } from 'express';
import images from './api/images';
const routes = Router();

routes.get('/', (_req: Request, res: Response) => res.send('OK'));
routes.use('/images', images);

export default routes;
