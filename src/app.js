import express from "express";
import session from "express-session";
import bodyParser from 'body-parser';
import mocksPetRouter from './routes/petMocks.router.js'
import mocksUserRouter from './routes/userMocks.router.js'
import mocksGenerateDataRouter from './routes/generateDataMoks.router.js'
import { errorHandler } from "./middleware/errorHandler.js";
import dotenv from 'dotenv';
import MongoStore from 'connect-mongo';
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from "mongoose";
import { conectaDB } from './database.js'


dotenv.config()
const MONGO_URL = process.env.MONGO_URL
// Obtener __filename a partir de import.meta.url
const __filename = fileURLToPath(import.meta.url);



// Obtener __dirname a partir de __filename
const __dirname = path.dirname(__filename);

console.log("dir", __dirname)


const app = express();
//const MONGO_URL = 'mongodb + srv://darioatach70150:nsZU2p8aqZb2g469@cluster0.bkb5s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

console.log(MONGO_URL)
const PORT = process.env.PORT

mongoose.connect(MONGO_URL);
console.log('7')

const db = mongoose.connection;

/*db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGO_URL })
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/



app.use(express.json())
app.use('/api/mocks/pet', mocksPetRouter)
app.use('/api/mocks/user', mocksUserRouter)
app.use('/api/mocksData', mocksGenerateDataRouter)

app.use((req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found.`);
    error.status = 404;
    next(error);
});

app.use(errorHandler)
conectaDB(MONGO_URL, "back3")
/*app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGO_URL })
}))*/
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
