import mongoose from 'mongoose';
import { app } from './app';

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY is required');
}

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is required');
}

if (!process.env.ROOT_ID) {
  throw new Error('ROOT_ID is required');
}

if (!process.env.ROOT_USERNAME) {
  throw new Error('ROOT_USERNAME is required');
}

if (!process.env.ROOT_EMAIL) {
  throw new Error('ROOT_EMAIL is required');
}

if (!process.env.ROOT_PASSWORD) {
  throw new Error('ROOT_PASSWORD is required');
}

mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log('DB connected:', db.connections[0].name))
  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
