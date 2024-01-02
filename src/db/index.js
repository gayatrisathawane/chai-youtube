import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'
dotenv.config(
    {
        path:'./env'
    }
);



const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(``)
        console.log(`\n MongoDb connected !! Db HOst ${connectInstance.connection.host}`)
    }
    catch (error) {
        console.log("MongoGb connection error", error);
        process.exit(1)

    }
}
export default connectDB