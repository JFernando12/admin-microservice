import express from 'express';
import cookieSession from 'cookie-session';

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

export { app };
