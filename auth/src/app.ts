import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { errorHandler } from './middlewares/error-handler';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { currentUser } from './middlewares/current-user';
import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';

const app = express();

//MiddleWares
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
app.use('/api', signupRouter);
app.use('/api', signinRouter);
app.use('/api', signoutRouter);
app.use('/api', currentUserRouter);

// Error handler
app.use(errorHandler);

export { app };
