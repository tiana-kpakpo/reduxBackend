import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)

        if(connection) {
            console.log('DB connected successfully')
        }
        
    } catch (error) {
        console.log(error)
        
    }
}


export default connectDB;

