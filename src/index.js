import express from "express";
import dotenv from 'dotenv'
import connectDB  from './db/index.js'
dotenv.config(
    {
        path:'./env'
    }
);
// const app = express();


connectDB()







//Database connection with iffe function 
    
    //   (async () => {
    //         try {
    //             const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //             if (connect) {
    //                 console.log('mongo db connect ')
    //             }
    //         } catch(error) {

    //             console.log("ERROR :", error);
              
    //         }
    //     })()


    // const mongo = async()=>{

    //     const connect = await mongoose.connect('mongodb+srv://gayatrisathawane:gayatri123@cluster0.cqdx7ze.mongodb.net/chai-videotube') 
    //        if(connect){
    //         console.log("connected")
    //        }
    // }
    // mongo()

    // app.listen(process.env.PORT , ()=>{
    //     console.log("app is listening on port 8000")
    // })