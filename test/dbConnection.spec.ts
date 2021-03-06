import { closeDB, connectDB } from './dbHandler';

describe('Test DB connection', () => {
  afterAll(closeDB);

  it('should failed to connect database', async () => {
    await expect(connectDB('Intentional incorrect URI')).rejects.toThrowError();
  });

  it('should connect database successfully', async () => {
    await expect(connectDB()).resolves.toBeUndefined();
  });
});
