import path from 'path';
import sharp from 'sharp';
import ImageProcessor from '../imageProcessor';

describe('test imageProcessor module', () => {
  it('tests the initialize function', async (done) => {
    const imageProcessor = new ImageProcessor();
    await imageProcessor.initialize('udacity-logo.png');
    expect(imageProcessor.image).toBeDefined();
    expect(imageProcessor.name).toBe('udacity-logo');
    expect(imageProcessor.format).toBe('png');
    expect(imageProcessor.path).toBe(
      `${path.dirname(__dirname)}/images/udacity-logo.png`
    );
    done();
  });

  it('tests the resize function', async (done) => {
    const imageProcessor = new ImageProcessor();
    await imageProcessor.initialize('udacity-logo.png');
    await imageProcessor.resize(100, 100);
    const imageMetadata = await sharp(imageProcessor.image).metadata();
    expect(imageMetadata.width).toBe(100);
    expect(imageMetadata.height).toBe(100);
    expect(imageProcessor.path).toBe(
      `${path.dirname(__dirname)}/images/udacity-logo-100-100.png`
    );
    done();
  });
});
