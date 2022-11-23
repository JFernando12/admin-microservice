import mongoose from 'mongoose';
import { app } from './app';

mongoose
  .connect('mongodb://auth-mongo-srv:27017/auths')
  .then((db) => console.log('DB connect:', db.connections[0].name))
  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
