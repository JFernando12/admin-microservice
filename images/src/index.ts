import mongoose, { connect } from 'mongoose';
import { app } from './app';

mongoose
  .connect('mongodb://images-mongo-srv:27017/images')
  .then((db) => console.log('DB connected: ', db.connections[0].name))
  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
