import express from 'express';
import cookieSession from 'cookie-session';
import { currentUser } from './middlewares/current-user';
import { newRouter } from './routes/new';

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(currentUser);

//Routes
app.use('/api', newRouter);

export { app };
