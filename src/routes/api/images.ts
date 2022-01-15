/* eslint-disable new-cap */
import { Request, Response, Router } from 'express';
import ImageProcessor from '../../imageProcessor';

const images = Router();

images.get('/', async (req: Request, res: Response) => {
  const imageName = req.query.name as string;
  if (imageName) {
    const imageProcessor = new ImageProcessor();
    try {
      await imageProcessor.initialize(imageName);
      const width = parseInt(req.query.width as string, 10);
      const height = parseInt(req.query.height as string, 10);
      if (width && height) {
        await imageProcessor.resize(width, height);
      }
      res.sendFile(imageProcessor.path!);
    } catch (err) {
      res.status(404).send("POOF! That image doesn't exist!");
    }
  } else {
    res.status(400).send('Image name is required');
  }
});

export default images;
