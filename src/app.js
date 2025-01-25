import express from "express";
import passport from "passport"
import session from "express-session";
import bodyParser from 'body-parser';
import adoptionRouter from './routes/adoption.router.js'
import mocksPetRouter from './routes/petMocks.router.js'
import mocksUserRouter from './routes/userMocks.router.js'
import mocksGenerateDataRouter from './routes/generateDataMoks.router.js'
import { errorHandler } from "./middleware/errorHandler.js";
import { initPassport } from './config/passport.config.js';
import dotenv from 'dotenv';
//import MongoStore from 'connect-mongo';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

initPassport()
app.use(passport.initialize())

const PORT = process.env.PORT
app.use(express.json())
app.use('/api/mocks/pet', mocksPetRouter)
app.use('/api/mocks/user', mocksUserRouter)
app.use('/api/mocksData', mocksGenerateDataRouter)
app.use('/api/adoptions', adoptionRouter)

app.use((req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found.`);
    error.status = 404;
    next(error);
});

app.use(errorHandler)





app.listen(PORT, () => console.log(`Listening on ${PORT}`))
