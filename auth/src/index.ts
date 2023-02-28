import mongoose from 'mongoose';
import { app } from './app';
import { JWT_KEY, MONGO_URI, PORT } from './environment';

if (!MONGO_URI) {
  throw new Error('MONGO_URI must exist');
}
if (!JWT_KEY) {
  throw new Error('JWT_KEY must exist');
}
if (!PORT) {
  throw new Error('PORT must exist');
}

mongoose.connect(MONGO_URI).then((db) => {
  console.log('DB connected: ', db.connections[0].name);

  // Init server
  app.listen(PORT, () => {
    console.log('Server on port: ', PORT);
  });
});
