import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongoServer: MongoMemoryServer;

export const connectDB = async (uri?: string): Promise<void> => {
  if (!uri) {
    mongoServer = await MongoMemoryServer.create();

    uri = mongoServer.getUri();
  }

  await mongoose.connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const closeDB = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

export const clearDBCollections = async (): Promise<void> => {
  const { collections } = mongoose.connection;

  await Promise.all(
    Object.values(collections).map(async (collection) =>
      collection.deleteMany({})
    )
  );
};
