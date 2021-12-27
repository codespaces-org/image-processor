/* eslint-disable prettier/prettier */
/* eslint-disable require-jsdoc */
import sharp from 'sharp';
import * as fs from 'fs';

export default class ImageProcessor {
  image: Buffer | undefined;
  imageName: string | undefined;
  imageFormat: string | undefined;

  async initialize(imageName: string) {
    try {
      this.image = fs.readFileSync(imageName);
      const format = (await this.getMetaData()).format;
      this.imageName = imageName;
      this.imageFormat = format;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async resize(width: number, height: number): Promise<Buffer> {
    const path = `${__dirname}/public/images/${this.imageName}-${width}-${height}.${this.imageFormat}`;
    const fileExists = await this.checkIfFileExists(path, width, height, this.imageFormat!);

    if (!fileExists) {
      await sharp(this.image)
        .resize(width, height)
        .toFile(path);
    }

    return fs.readFileSync(path);
  }

  async getMetaData(): Promise<sharp.Metadata> {
    try {
      const metaData = await sharp(this.image).metadata();
      return metaData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async checkIfFileExists(path: string, width: number, height: number, format: string) {
    try {
      await fs.promises.access(path, fs.constants.F_OK);
      return true;
    } catch (err) {
      return false;
    }
  }
}
