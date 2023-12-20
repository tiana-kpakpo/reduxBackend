import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import router from './routes/route.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000

//middleware
app.use(cors({
    origin : '*'
}))
app.use(morgan('dev'))
app.use(express.json())

//route
app.use(router)

  

app.listen(PORT, () => {
    connectDB()
    console.log(`server is running on PORT ${PORT}`)

})