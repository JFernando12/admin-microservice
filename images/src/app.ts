import cookieSession from 'cookie-session';
import express from 'express';
import { currentUser } from './middlewares/current-user';
import { errorHandler } from './middlewares/error-handler';
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
app.use('/api', indexRouter);
app.use('/api', newRouter);

// Error handler
app.use(errorHandler);

export { app };
