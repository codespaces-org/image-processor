/* eslint-disable prettier/prettier */
/* eslint-disable require-jsdoc */
import sharp from 'sharp';
import * as fs from 'fs';

export default class ImageProcessor {
  image: Buffer | undefined;
  name: string | undefined;
  format: string | undefined;
  path: string | undefined;

  async initialize(imageName: string) {
    this.path = `${__dirname}/images/${imageName}`;
    this.image = fs.readFileSync(this.path);
    const format = (await this.getMetaData()).format;
    this.name = imageName.split('.')[0];
    this.format = format;
  }

  async resize(width: number, height: number): Promise<Buffer> {
    this.path = `${__dirname}/images/${this.name}-${width}-${height}.${this.format}`;
    const fileExists = await this.checkIfFileExists();

    if (!fileExists) {
      await sharp(this.image).resize(width, height).toFile(this.path);
      this.image = fs.readFileSync(this.path);
    }

    return this.image!;
  }

  async getMetaData(): Promise<sharp.Metadata> {
    const metaData = await sharp(this.image).metadata();
    return metaData;
  }

  async checkIfFileExists(): Promise<Boolean> {
    try {
      await fs.promises.access(this.path!, fs.constants.F_OK);
      return true;
    } catch (_) {
      return false;
    }
  }
}
