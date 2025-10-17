import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // add this in .env.local
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev, use a global variable so it isn’t constantly re-created
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any)._mongoClientPromise = client.connect();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In prod, it’s fine to use a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
