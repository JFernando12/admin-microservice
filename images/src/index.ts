import mongoose, { connect } from 'mongoose';
import { app } from './app';

if (!process.env.JWT_KEY) {
  throw new Error('JWT_KEY is required');
}

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is required');
}

if (!process.env.AWS_BUCKET_NAME) {
  throw new Error('AWS_BUCKET_NAME is required');
}

if (!process.env.AWS_BUCKET_REGION) {
  throw new Error('AWS_BUCKET_REGION is required');
}

if (!process.env.AWS_ACCESS_KEY) {
  throw new Error('AWS_ACCESS_KEY is required');
}

if (!process.env.AWS_SECRET_KEY) {
  throw new Error('AWS_SECRET_KEY is required');
}

mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => console.log('DB connected: ', db.connections[0].name))
  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
