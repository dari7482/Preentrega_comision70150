import express from "express";
import mocksPetRouter from './routes/petMocks.router.js'
import mocksUserRouter from './routes/userMocks.router.js'
import mocksGenerateDataRouter from './routes/generateDataMoks.router.js'
import { errorHandler } from "./middleware/errorHandler.js";



const app = express();
const PORT = 8080


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
app.listen(PORT, () => (`Listening on ${PORT}`))