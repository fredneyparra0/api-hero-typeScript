import dotenv from 'dotenv'
dotenv.config()
import  express ,{ Application } from 'express';
import router from './routes/index'
import cors from 'cors';
import morgan from 'morgan';
import { connectDb } from './config/connectDb'

const app: Application = express();
connectDb()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => console.log(`server listen in port http://localhost:${PORT}`))