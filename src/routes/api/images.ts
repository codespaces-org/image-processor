/* eslint-disable new-cap */
import { Request, Response, Router } from 'express';
import ImageProcessor from '../../imageProcessor';

const images = Router();

images.get('/', (req: Request, res: Response) => {
  const imageName = req.query.name as string;
  let image: Buffer | undefined;
  if (imageName) {
    const imageProcessor = new ImageProcessor();
    imageProcessor.initialize(imageName);
    const width = parseInt(req.query.width as string, 10);
    const height = parseInt(req.query.hei1ght as string, 10);
    image = imageProcessor.image;

    if (width && height) {
      imageProcessor.resize(width, height).then((image) => {
        image = image;
      });
    }

    res.writeHead(200, {
      'Content-Type': `image/${imageProcessor.imageFormat}`,
    });
    res.end(image);
  } else {
    res.status(400).send('Image name is required');
  }
});

export default images;
