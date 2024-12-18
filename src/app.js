import express from "express";
import mocksRouter from './routes/petMocks.router.js'
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();
const PORT = 8080


app.use(express.json())
app.use('/api/mocks/', mocksRouter)


/*app.get('/', (req, res) => {
    res.send('¡Hola, Mundo!');
});*/



app.listen(PORT, () => (`Listening on ${PORT}`))