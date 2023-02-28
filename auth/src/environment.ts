import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const JWT_KEY = process.env.JWT_KEY;
export const MONGO_URI = process.env.MONGO_URI;
