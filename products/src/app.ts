import express from 'express';
import cookieSession from 'cookie-session';
import { currentUser } from './middlewares/current-user';
import { newRouter } from './routes/new';
import { indexRouter } from './routes';
import { errorHandler } from './middlewares/error-handler';

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
app.use('/api', indexRouter);

//Error Handler
app.use(errorHandler);

export { app };
