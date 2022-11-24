import cookieSession from 'cookie-session';
import express from 'express';
import { currentUser } from './middlewares/current-user';
import { indexRouter } from './routes';
import { newRouter } from './routes/new';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(currentUser);

// Routes
app.use(indexRouter);
app.use(newRouter);

export { app };
